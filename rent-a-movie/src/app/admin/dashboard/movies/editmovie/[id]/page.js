const handleEditMovie = async (id) => {
  const res = await fetch(`http://localhost:3000/movies/${id}`, {
    method: "UPDATE",
  });

  if (res.ok) {
    alert("Movie updated successfully!");
  } else {
    alert("Failed to update movie");
  }
};

export default function updateMovie({ params }) {
  const { id } = params;
}
