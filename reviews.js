window.reviewData = [
  {
    name: "John Smith",
    date: new Date("2022-03-01"),
    rating: 4,
    text: "Great game, really enjoyed playing it!"
  },
  {
    name: "Jane Doe",
    date: new Date("2022-03-05"),
    rating: 5,
    text: "The best game ever! I can't stop playing it!"
  },
  {
    name: "Bob Johnson",
    date: new Date("2022-03-10"),
    rating: 3,
    text: "Decent game, but could use some improvements."
  },
  {
    name: "Sarah Lee",
    date: new Date("2022-03-15"),
    rating: 2,
    text: "Not a fan of this game. The graphics are terrible."
  },
  {
    name: "David Chen",
    date: new Date("2022-03-20"),
    rating: 1,
    text: "This game is a waste of time. Do not recommend."
  }
];

// Get the reviews container element
const reviewsContainer = document.getElementById("reviews-container");

// Function to generate a single review card
function generateReviewCard(review) {
  const { name, date, rating, text } = review;

  // Create review card element
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review");

  // Add name, date, and rating to the card
  const nameEl = document.createElement("h3");
  nameEl.textContent = name;
  const dateEl = document.createElement("p");
  dateEl.textContent = new Date(date).toLocaleDateString();
  const ratingEl = document.createElement("p");
  ratingEl.innerHTML = "Rating: " + "★ ".repeat(rating) + "☆ ".repeat(5 - rating);

  // Add text to the card
  const textEl = document.createElement("p");
  textEl.textContent = text;

  // Append elements to the card
  reviewCard.appendChild(nameEl);
  reviewCard.appendChild(dateEl);
  reviewCard.appendChild(ratingEl);
  reviewCard.appendChild(textEl);

  return reviewCard;
}

// Function to display all reviews
function displayReviews() {
  // Clear existing reviews
  reviewsContainer.innerHTML = "";

  // Loop through each review and generate a card for it
  reviewData.forEach((review) => {
    const reviewCard = generateReviewCard(review);
    reviewsContainer.appendChild(reviewCard);
  });
}

// Call the displayReviews function to initially display all reviews
displayReviews();

// Handle form submission
const addReviewForm = document.getElementById("add-review-form");
addReviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the values from the form inputs
  const name = document.getElementById("name-input").value;
  const date = document.getElementById("date-input").value;
  const rating = parseInt(document.getElementById("rating-input").value);
  const text = document.getElementById("text-input").value;

  // Create a new review object
  const newReview = {
    name,
    date,
    rating,
    text,
  };

  // Add the new review to the reviewData array
  reviewData.push(newReview);

  // Clear the form inputs
  addReviewForm.reset();

  // Display all reviews (including the new one)
  displayReviews();
});
