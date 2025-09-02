import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import BookForm from "../components/book/BookForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookDetail = () => {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await fetch(`http://10.26.144.58:3000/api/books/${id}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        const data = await response.json();
        console.log("API response:", data);
        setBook(data.books || data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleSave = async (updatedBook: any) => {
    setSaving(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://10.26.144.58:3000/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(updatedBook),
      });

      if (response.ok) {
        Alert.alert("Success", "Book updated successfully");
      } else {
        const text = await response.text();
        Alert.alert("Error", text || "Update failed");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://10.26.144.58:3000/api/books/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (response.ok) {
        Alert.alert("Deleted", "Book deleted successfully", [
          { text: "OK", onPress: () => router.replace("/book") },
        ]);
      } else {
        const text = await response.text();
        Alert.alert("Error", text || "Delete failed");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  const confirmDelete = () => {
    Alert.alert("Confirm Deletion", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", style: "destructive", onPress: handleDelete },
    ]);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!book) return <Text>No book found.</Text>;

  return (
    <View style={style.container}>
      <Text style={style.title}>Edit Book</Text>
      <BookForm
        initial={book}
        onSubmit={handleSave}
        submitLabel={saving ? "Saving..." : "Save"}
      />
      <Text style={style.delete} onPress={confirmDelete}>
        Delete this book
      </Text>
    </View>
  );
};

export default BookDetail;

const style = StyleSheet.create({
  container: { marginVertical: 14, marginHorizontal: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  delete: {
    color: "red",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});
