let users = [
  {
    name: "Daksh",
    pic: "https://images.unsplash.com/photo-1779896412200-e1047994622b?q=80&w=870&auto=format&fit=crop",
    bio: "Good person who enjoys helping others and staying positive."
  },
  {
    name: "Aarav",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=870&auto=format&fit=crop",
    bio: "Tech enthusiast who loves coding, music, and learning new things."
  },
  {
    name: "Rohan",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=870&auto=format&fit=crop",
    bio: "Simple guy who enjoys photography, travel, and good conversations."
  },
  {
    name: "Arjun",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=870&auto=format&fit=crop",
    bio: "Always curious, always learning, and never afraid of a challenge."
  },
  {
    name: "Kabir",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=870&auto=format&fit=crop",
    bio: "Sports lover who spends his free time playing football and exploring."
  },
  {
    name: "Vihaan",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=870&auto=format&fit=crop",
    bio: "Creative mind with a passion for design, technology, and innovation."
  },
  {
    name: "Aditya",
    pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=870&auto=format&fit=crop",
    bio: "Calm personality who enjoys coding, gaming, and spending time with friends."
  },
  {
    name: "Kunal",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=870&auto=format&fit=crop",
    bio: "Friendly person who believes that every day is a chance to improve."
  },
  {
    name: "Yash",
    pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=870&auto=format&fit=crop",
    bio: "Music fan, occasional gamer, and someone who enjoys a good laugh."
  },
  {
    name: "Aryan",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=870&auto=format&fit=crop",
    bio: "Dreamer and learner who loves technology, movies, and new experiences."
  }
];

// Load saved users from this browser/device.
try {
  const savedUsers = JSON.parse(localStorage.getItem("profilePagesUsers"));
  if (Array.isArray(savedUsers)) {
    users = savedUsers;
  }
} catch (error) {
  console.log("Could not load saved users:", error);
}

function saveUsers() {
  localStorage.setItem("profilePagesUsers", JSON.stringify(users));
}

function showuser(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = user.pic;
  img.alt = user.name;

  const container = document.createElement("div");
  container.classList.add("container");

  const h1 = document.createElement("div");
  h1.classList.add("h1");
  h1.textContent = user.name;

  const p = document.createElement("div");
  p.classList.add("p");
  p.textContent = user.bio;

  card.appendChild(img);
  card.appendChild(container);
  container.appendChild(h1);
  container.appendChild(p);

  document.querySelector(".cards").appendChild(card);
}

function renderUsers(list = users) {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";

  list.forEach(showuser);
}

renderUsers();

const inp = document.querySelector("#search");

inp.addEventListener("input", function () {
  const searchValue = inp.value.trim().toLowerCase();

  const filteredUsers = users.filter(function (user) {
    return user.name.toLowerCase().includes(searchValue);
  });

  renderUsers(filteredUsers);
});

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  document.body.innerHTML = "";

  const page = document.createElement("div");
  page.className = "form-page";

  const heading = document.createElement("h1");
  heading.textContent = "Sign in to your account";

  const card = document.createElement("div");
  card.className = "cardi";

  const name = document.createElement("input");
  name.className = "inp2323";
  name.placeholder = "Enter your name";
  name.type = "text";

  const bio = document.createElement("input");
  bio.className = "bio";
  bio.placeholder = "Enter something about you";
  bio.type = "text";

  const url = document.createElement("input");
  url.className = "url";
  url.placeholder = "Enter your image URL";
  url.type = "url";

  const submit = document.createElement("button");
  submit.className = "submit";
  submit.textContent = "Submit";

  card.append(name, bio, url, submit);
  page.append(heading, card);
  document.body.appendChild(page);

  submit.addEventListener("click", function () {
    const newUser = {
      name: name.value.trim(),
      pic: url.value.trim(),
      bio: bio.value.trim()
    };

    if (!newUser.name || !newUser.bio || !newUser.pic) {
      alert("Please fill all fields.");
      return;
    }

    users.unshift(newUser);
    saveUsers();

    // Return to the profile page without losing the saved user.
    window.location.reload();
  });
});
