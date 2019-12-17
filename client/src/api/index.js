export const fetchCollectionsData = () =>
  fetch("/api/collections")
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const fetchBooksData = () =>
  fetch("/api/books/")
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const addNewCollectionData = ({ collection }) =>
  fetch("/api/collections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(collection)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const editCollectionData = ({ id, collection }) =>
  fetch(`/api/collections/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(collection)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const deleteCollectionData = ({ id }) =>
  fetch(`/api/collections/${id}`, {
    method: "DELETE"
  }).catch(error => {
    console.log(error);
  });

export const addBookToCollectionData = ({ collectionId, bookId }) =>
  fetch(`/api/collections/${collectionId}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ bookId })
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const addBookData = ({ book }) =>
  fetch(`/api/books/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(book)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const deleteBookData = ({ id }) =>
  fetch(`/api/books/${id}`, {
    method: "DELETE"
  }).catch(error => {
    console.log(error);
  });

export const deleteBookDataFromCollection = ({ collectionId, bookId }) =>
  fetch(`/api/collections/${collectionId}/books/${bookId}`, {
    method: "DELETE"
  }).catch(error => {
    console.log(error);
  });

export const editBookData = ({ id, book }) =>
  fetch(`/api/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(book)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
