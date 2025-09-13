async function loadData() {
  console.log("one");
  console.log("two");

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log("data retrieved"));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("data got await", data[0]);

  console.log("four");
  console.log("five");
}

// loadData();

const loadData2 = async () => {
  console.log(1);
  console.log(2);
  try {
    const res = await fetch("https://jsonplaceholer.typicode.com/users");
    const data = await res.json();
    console.log("data got", data[0]);
  } catch (error) {
    console.log("error happened");
  }
  console.log(4);
  console.log(5);
};

loadData2();
