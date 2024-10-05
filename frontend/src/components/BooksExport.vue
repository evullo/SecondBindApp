<script setup>
const downloadFile = async (format) => {
  const url = `http://localhost:8000/books/${format}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    alert(`Error downloading ${format.toUpperCase()} file`);
    return;
  }
  
  const data = format === 'json' ? await response.json() : await response.text();
  const blob = new Blob([format === 'json' ? JSON.stringify(data, null, 2) : data], { 
    type: format === 'json' ? 'application/json' : 'text/csv' 
  });

  const downloadUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', `books.${format}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div class="export-buttons">
    <button @click="downloadFile('json')" class="export-btn">Download JSON</button>
    <button @click="downloadFile('csv')" class="export-btn">Download CSV</button>
  </div>
</template>

<style scoped>
.export-buttons {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 2.5vh 0;
}

.export-btn {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  background-color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  filter: drop-shadow(5px 5px 10px #000000);
  transition: all 0.5s ease-in-out;
}

.export-btn:hover {
  background-color: black;
  color: white;
}
</style>
