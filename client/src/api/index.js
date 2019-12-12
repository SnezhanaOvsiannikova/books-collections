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

export const editCollectionData = ({ id, collection }) =>
  fetch(`/api/collections/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(collection)
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
