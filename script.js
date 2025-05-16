document.addEventListener("DOMContentLoaded", () => {
    const movieCards = document.querySelectorAll("#today .movie-card");
    const overlay = document.getElementById("showtimes-overlay");
    const content = document.getElementById("showtimes-content");
    const closeBtn = document.getElementById("showtimes-close");
  
    // Example showtimes data (you can customize per movie title)
    const exampleShowtimes = [
      { time: "1:00 PM", price: "1299kr" },
      { time: "3:00 PM", price: "1299kr" },
      { time: "5:00 PM", price: "1499kr" },
    ];
  
    function createShowtimesTable(movieTitle) {
      // Clear previous content except close button
      // We'll keep the close button, so remove all other children except closeBtn
      while (content.children.length > 1) {
        content.removeChild(content.lastChild);
      }
  
      const heading = document.createElement("h2");
      heading.textContent = `Showtimes for "${movieTitle}"`;
      heading.style.marginBottom = "15px";
      content.appendChild(heading);
  
      const table = document.createElement("table");
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";
      table.style.color = "white";
  
      // Table header row
      const headerRow = document.createElement("tr");
      ["Showtime", "Price", "Order"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.borderBottom = "1px solid var(--secondarycolor1)";
        th.style.padding = "8px";
        th.style.textAlign = "left";
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
  
      // Add rows for each showtime
      exampleShowtimes.forEach(({ time, price }) => {
        const row = document.createElement("tr");
  
        const timeCell = document.createElement("td");
        timeCell.textContent = time;
        timeCell.style.padding = "8px";
        row.appendChild(timeCell);
  
        const priceCell = document.createElement("td");
        priceCell.textContent = price;
        priceCell.style.padding = "8px";
        row.appendChild(priceCell);
  
        const orderCell = document.createElement("td");
        orderCell.style.padding = "8px";
        const orderBtn = document.createElement("button");
        orderBtn.textContent = "Order";
        orderBtn.style.cursor = "pointer";
        orderBtn.style.padding = "5px 10px";
        orderBtn.style.borderRadius = "5px";
        orderBtn.addEventListener("click", () => {
          alert(`You ordered a ticket for "${movieTitle}" at ${time} for ${price}`);
        });
        orderCell.appendChild(orderBtn);
        row.appendChild(orderCell);
  
        table.appendChild(row);
      });
  
      content.appendChild(table);
    }
  
    movieCards.forEach((card) => {
      // Create and add Showtimes button
      const button = document.createElement("button");
      button.textContent = "Showtimes";
      button.classList.add("showtimes-button");
      card.appendChild(button);
  
      button.addEventListener("click", () => {
        const movieTitle = card.querySelector("p").textContent.trim();
        createShowtimesTable(movieTitle);
  
        // Show overlay with fade-in effect
        overlay.style.display = "flex";
        // Small timeout to trigger CSS transition for opacity
        setTimeout(() => {
          overlay.style.opacity = "1";
        }, 10);
      });
    });
  
    // Close button handler
    closeBtn.addEventListener("click", () => {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300); // match the CSS transition duration
    });
  
    // Clicking outside the content closes the overlay
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeBtn.click();
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("auth-overlay");
    const content = document.getElementById("auth-content");
    const closeBtn = document.getElementById("auth-close");
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
  
    function clearForm() {
      // Remove any form except the close button
      while (content.children.length > 1) {
        content.removeChild(content.lastChild);
      }
    }
  
    function createLoginForm() {
      clearForm();
  
      const heading = document.createElement("h2");
      heading.textContent = "Log In";
      heading.style.marginBottom = "20px";
      content.appendChild(heading);
  
      const form = document.createElement("form");
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.gap = "15px";
  
      // Email input
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.placeholder = "Email";
      emailInput.required = true;
      emailInput.style.padding = "10px";
      emailInput.style.borderRadius = "5px";
      emailInput.style.border = "none";
      form.appendChild(emailInput);
  
      // Password input
      const passInput = document.createElement("input");
      passInput.type = "password";
      passInput.placeholder = "Password";
      passInput.required = true;
      passInput.style.padding = "10px";
      passInput.style.borderRadius = "5px";
      passInput.style.border = "none";
      form.appendChild(passInput);
  
      // Submit button
      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.textContent = "Log In";
      submitBtn.style.padding = "10px";
      submitBtn.style.borderRadius = "5px";
      submitBtn.style.border = "none";
      submitBtn.style.background = "var(--secondarycolor1)";
      submitBtn.style.color = "white";
      submitBtn.style.cursor = "pointer";
      form.appendChild(submitBtn);
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`Logging in as ${emailInput.value}`);
        closeAuthModal();
      });
  
      content.appendChild(form);
    }
  
    function createSignupForm() {
      clearForm();
  
      const heading = document.createElement("h2");
      heading.textContent = "Sign Up";
      heading.style.marginBottom = "20px";
      content.appendChild(heading);
  
      const form = document.createElement("form");
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.gap = "15px";
  
      // Email input
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.placeholder = "Email";
      emailInput.required = true;
      emailInput.style.padding = "10px";
      emailInput.style.borderRadius = "5px";
      emailInput.style.border = "none";
      form.appendChild(emailInput);
  
      // Password input
      const passInput = document.createElement("input");
      passInput.type = "password";
      passInput.placeholder = "Password";
      passInput.required = true;
      passInput.style.padding = "10px";
      passInput.style.borderRadius = "5px";
      passInput.style.border = "none";
      form.appendChild(passInput);
  
      // Confirm password input
      const passConfirmInput = document.createElement("input");
      passConfirmInput.type = "password";
      passConfirmInput.placeholder = "Confirm Password";
      passConfirmInput.required = true;
      passConfirmInput.style.padding = "10px";
      passConfirmInput.style.borderRadius = "5px";
      passConfirmInput.style.border = "none";
      form.appendChild(passConfirmInput);
  
      // Submit button
      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.textContent = "Sign Up";
      submitBtn.style.padding = "10px";
      submitBtn.style.borderRadius = "5px";
      submitBtn.style.border = "none";
      submitBtn.style.background = "var(--secondarycolor1)";
      submitBtn.style.color = "white";
      submitBtn.style.cursor = "pointer";
      form.appendChild(submitBtn);
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (passInput.value !== passConfirmInput.value) {
          alert("Passwords do not match!");
          return;
        }
        alert(`Signing up as ${emailInput.value}`);
        closeAuthModal();
      });
  
      content.appendChild(form);
    }
  
    function openAuthModal(formType) {
      if (formType === "login") createLoginForm();
      else if (formType === "signup") createSignupForm();
  
      overlay.style.display = "flex";
      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 10);
    }
  
    function closeAuthModal() {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
        clearForm();
      }, 300);
    }
  
    loginBtn.addEventListener("click", () => openAuthModal("login"));
    signupBtn.addEventListener("click", () => openAuthModal("signup"));
    closeBtn.addEventListener("click", closeAuthModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeAuthModal();
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const authOverlay = document.getElementById('auth-overlay');
    const authContent = document.getElementById('auth-content');
    const authClose = document.getElementById('auth-close');
  
    // Grab the login and signup sections from the page (hidden by default)
    const loginSection = document.getElementById('login');
    const signupSection = document.getElementById('signup');
  
    // Remove them from normal page flow so they don't appear twice
    loginSection.style.display = 'none';
    signupSection.style.display = 'none';
  
    // Function to open auth modal and insert appropriate form
    function openAuthModal(type) {
      // Clear previous content
      authContent.querySelectorAll('form, h2').forEach(el => el.remove());
  
      // Clone the form from the hidden section based on type
      let sectionToShow = type === 'login' ? loginSection : signupSection;
      let clone = sectionToShow.cloneNode(true);
      clone.style.display = 'block'; // make visible in modal
  
      // Insert cloned form into the modal content (below the close button)
      authContent.appendChild(clone);
  
      // Show overlay with fade-in
      authOverlay.style.display = 'flex';
      setTimeout(() => authOverlay.style.opacity = '1', 10);
    }
  
    // Function to close auth modal
    function closeAuthModal() {
      authOverlay.style.opacity = '0';
      setTimeout(() => authOverlay.style.display = 'none', 300);
    }
  
    // Nav link click handlers
    document.getElementById('nav-login').addEventListener('click', e => {
      e.preventDefault();
      openAuthModal('login');
    });
  
    document.getElementById('nav-signup').addEventListener('click', e => {
      e.preventDefault();
      openAuthModal('signup');
    });
  
    // Close button handler
    authClose.addEventListener('click', closeAuthModal);
  
    // Optional: clicking outside modal content closes modal
    authOverlay.addEventListener('click', e => {
      if (e.target === authOverlay) closeAuthModal();
    });
  });
  