// Step 1: Timer Incrementation

document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
  
    let count = 0;
    const timerInterval = setInterval(() => {
      count++;
      timerDisplay.textContent = count;
    }, 1000);
  });
// Step 2: Manual Increment and Decrement

document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
  
    let count = 0;
    const timerInterval = setInterval(() => {
      count++;
      timerDisplay.textContent = count;
    }, 1000);
  
    plusButton.addEventListener('click', function () {
      count++;
      timerDisplay.textContent = count;
    });
  
    minusButton.addEventListener('click', function () {
      count--;
      timerDisplay.textContent = count;
    });
  });
// Step 3: "Like" Feature

document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('like');
    const likeList = document.getElementById('likes');
  
    let count = 0;
    const likeCounts = {};
  
    const timerInterval = setInterval(() => {
      count++;
      timerDisplay.textContent = count;
    }, 1000);
  
    plusButton.addEventListener('click', function () {
      count++;
      timerDisplay.textContent = count;
    });
  
    minusButton.addEventListener('click', function () {
      count--;
      timerDisplay.textContent = count;
    });
  
    likeButton.addEventListener('click', function () {
      if (likeCounts[count]) {
        likeCounts[count]++;
      } else {
        likeCounts[count] = 1;
      }
      renderLikes();
    });
  
    function renderLikes() {
      likeList.innerHTML = '';
      Object.keys(likeCounts).forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = `${number}: ${likeCounts[number]} likes`;
        likeList.appendChild(listItem);
      });
    }
  });
// Step 4: Pause/Resume Feature

document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('like');
    const pauseButton = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comments');
  
    let count = 0;
    let timerInterval;
  
    function startTimer() {
      timerInterval = setInterval(() => {
        count++;
        timerDisplay.textContent = count;
      }, 1000);
    }
  
    startTimer();
  
    plusButton.addEventListener('click', function () {
      count++;
      timerDisplay.textContent = count;
    });
  
    minusButton.addEventListener('click', function () {
      count--;
      timerDisplay.textContent = count;
    });
  
    likeButton.addEventListener('click', function () {
      if (likeCounts[count]) {
        likeCounts[count]++;
      } else {
        likeCounts[count] = 1;
      }
      renderLikes();
    });
  
    pauseButton.addEventListener('click', function () {
      clearInterval(timerInterval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.textContent = 'Resume';
    });
  
    // Resume functionality
    pauseButton.addEventListener('click', function () {
      startTimer();
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      pauseButton.textContent = 'Pause';
    });
  
    function renderLikes() {
      likeList.innerHTML = '';
      Object.keys(likeCounts).forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = `${number}: ${likeCounts[number]} likes`;
        likeList.appendChild(listItem);
      });
    }
  
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value.trim();
  
      if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
// Step 5: Leave Comments

document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('like');
    const pauseButton = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comments');
  
    let count = 0;
    let timerInterval;
    const likeCounts = {};
  
    function startTimer() {
      timerInterval = setInterval(() => {
        count++;
        timerDisplay.textContent = count;
      }, 1000);
    }
  
    startTimer();
  
    plusButton.addEventListener('click', function () {
      count++;
      timerDisplay.textContent = count;
    });
  
    minusButton.addEventListener('click', function () {
      count--;
      timerDisplay.textContent = count;
    });
  
    likeButton.addEventListener('click', function () {
      if (likeCounts[count]) {
        likeCounts[count]++;
      } else {
        likeCounts[count] = 1;
      }
      renderLikes();
    });
  
    pauseButton.addEventListener('click', function () {
      clearInterval(timerInterval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.textContent = 'Resume';
    });
  
    pauseButton.addEventListener('click', function () {
      startTimer();
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      pauseButton.textContent = 'Pause';
    });
  
    function renderLikes() {
      likeList.innerHTML = '';
      Object.keys(likeCounts).forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = `${number}: ${likeCounts[number]} likes`;
        likeList.appendChild(listItem);
      });
    }
  
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value.trim();
  
      if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
          