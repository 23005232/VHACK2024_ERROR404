document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const infoButton = document.querySelector(".info-button");
    const pointsElement = document.getElementById("point-value");

    let points = 1000;
    pointsElement.textContent = points;

    // Function to process user input and generate responses
    function processInput(userInput) {
        // Convert user input to lowercase for case-insensitive comparison
        userInput = userInput.trim().toLowerCase();
        
        // Add user message to the chat box
        addMessage("User", userInput, "profile3.jpg");

        // Predefined responses based on keywords
        if (userInput.includes("what")) {
            addMessage("Cherry", "My investment grew 1000% in three days! and I have withdrawn RM3000 from it. ", "profile7.jpg");
        } else if (userInput.includes("how")) {
            addMessage("Cherry", "I asked my friend, who is an expert in investment, to help me. He's never wrong with investments. ", "profile7.jpg");
            addMessage("Cherry", "Why did you ask me? Are you interested in investment too? ", "profile7.jpg");
        } else if (userInput.includes("yes")) {
            addMessage("Cherry", "So basically, he would take 20% of your principal as his commission and help you invest the rest of your principal. Are you okay with that?", "profile7.jpg");
        } else if (userInput.includes("ok")) {
            addMessage("Cherry", "Here are the bank account details: Maybank 102xxxxxxxx Cherry Lee", "profile7.jpg");
            addMessage("Cherry", "You may start with Rm100 first", "profile7.jpg");
            addMessage("Cherry", "Have you transferred the money?", "profile7.jpg");
        }else if (userInput.includes("no")) {
            congratulations();
        }else if (userInput.includes("transferred")) {
            scammed();
            
        }

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Event listener for handling user input
    document.getElementById("send-button").addEventListener("click", function() {
        // Get user input from the input field
        const userInput = document.getElementById("message-input").value;
        // Process the user input
        processInput(userInput);
        // Clear the input field
        document.getElementById("message-input").value = "";
    });

    // Add event listener for the "keydown" event on the message input field
    messageInput.addEventListener("keydown", function(event) {
        // Check if the pressed key is the "Enter" key (key code 13)
        if (event.keyCode === 13) {
            // Prevent the default behavior of the "Enter" key (e.g., newline in textarea)
            event.preventDefault();
            
            // Get the value of the message input
            const messageText = messageInput.value.trim();

            // Check if the message is not empty
            if (messageText !== "") {

                // Process the user input
                processInput(messageText);
                // Clear the input field
                messageInput.value = "";
            }
        }
    });

    // Function to add a message to the chat box
    function addMessage(sender, message, profilePic) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");

        // Construct HTML content based on sender
        if (sender === "User") {
            messageElement.classList.add("sender");
            messageElement.innerHTML += `
                <div class="message-rectangle">${message}</div>
                <img src="${profilePic}" alt="Profile Picture" class="profile-picture">
                    `;
        } else {
            messageElement.classList.add("receiver");
            messageElement.innerHTML += `
                <div class="sender-info">
                    <span class="message-name">${sender}</span>
                    <img src="${profilePic}" alt="Profile Picture" class="profile-picture">
                </div>
                <div class="message-rectangle">${message}</div>
            `;
        }

        // Append the message to the chat box
        chatBox.appendChild(messageElement);
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showIntroMessage(message) {
        const introContainer = document.createElement("div");
        introContainer.classList.add("intro-container");
        const introMessageElement = document.createElement("div");
        introMessageElement.classList.add("chat-message", "system");
        introMessageElement.innerHTML = `
            <div class="message-rectangle">${message}</div>
        `;
        introContainer.appendChild(introMessageElement);
        chatBox.appendChild(introContainer);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    // Display the intro message
    const introMessage = "<i>You, an extrovert, often uses Tinder to find like-minded individuals. Cherry is your 13th match on the app. Both of you usually chat after your workday.";
    showIntroMessage(introMessage);

    addMessage("Cherry", "Baby, I want to share something with you! ", "profile7.jpg");

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    infoButton.addEventListener("click", function() {
        // Scroll to the specific section (replace "about" with the desired section id)
        scrollToSection("info");
    });

    function congratulations(){
        swal("Congratulations", "You escaped from scammers! Congratulations for earning 100 points! :)", "success", {
            button: "More info",
        }).then((value) => {
            points += 100;
            pointsElement.textContent = points;
            if (value !== null) {
                scrollToSection("info");
            }
        });
    }

    function scammed(){
        swal("Oh no!", "You are tricked by scammers! You lost 100 points. :(", "error", {
            button: "More info",
        }).then((value) => {
            points -= 100;
            pointsElement.textContent = points;
            if (value !== null) {
            scrollToSection("info");
            }
        });
    }

});