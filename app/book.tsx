import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import BookCard from "../components/book/BookCard";

const Book = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Book component mounted");
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/books?page=1&limit=10");
        const json = await res.json();
        console.log("Book data fetched successfully:", json.books);
        setData(json.books);
      } catch (err: any) {
        console.error("Error fetching book data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text style={{ color: "red" }}>Error: {error}</Text>;

  return (
    <View style={style.container}>
      <View style={style.headerRow}>
        <Text style={style.screenTitle}>Books</Text>

        <Text style={style.createBtn}>
          <Link href="/book_new">＋ New</Link>
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            genre={item.genre}
            year={item.year}
            price={item.price}
            onPress={() => router.push(`/book_detail?id=${item._id}`)}            
          />
        )}
        ListEmptyComponent={<Text>No books yet.</Text>}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, paddingTop: 16, paddingHorizontal: 16, backgroundColor: "#f8fafc" },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  screenTitle: { fontSize: 28, fontWeight: "800" },
  createBtn: { fontSize: 16, fontWeight: "700", color: "#2563eb" },
});

export default Book;
