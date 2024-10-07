const users = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    employee: { username: "employee", password: "employee123", role: "employee" }
};

const apppage = document.getElementById('app');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const originalContent = apppage.innerHTML;

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = Object.values(users).find(user =>
        user.username === username && user.password === password
    );

    if (user) {
        if (user.role === 'admin') {
            apppage.innerHTML = ` <!--Admin Dashboard HTML code here--> `;
            document.getElementById('logoutAdmin').addEventListener('click', function () {
                apppage.innerHTML = originalContent;
                loginError.textContent = '';
            });
        } else if (user.role === 'employee') {
            apppage.innerHTML = `
                <div class="employeedash">
                    <h1>Employee Dashboard</h1>
                    <div class="navbar">
                        <ul>
                            <li><a id="team1">Team 1</a></li>
                            <li><a id="team2">Team 2</a></li>
                            <li><a id="team3">Team 3</a></li>
                            <li><a id="team4">Team 4</a></li>
                        </ul>
                    </div>
                    <div class="team1">
                        <div class="team-leader">
                            <img src="dummy-person.jpg" alt="Team Leader" class="teamleader">
                            <p>Team Leader</p>
                        </div>
                        <div class="team-member team-member-1">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                            <p>Team Member 1</p>
                        </div>
                        <div class="team-member team-member-2">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                            <p>Team Member 1</p>
                        </div>
                        <div class="team-member team-member-3">
                            <img src="dummy-person.jpg" alt="Team Member 1" class="mem-1">
                            <p>Team Member 1</p>
                        </div>
                    </div>
                    <div id="showdetails" style="display: none;">
                        <div class="calendar" id="calendar"></div> <!-- Calendar Container -->
                        <div class="show-image">
                            <img src="" alt="Member Image">
                            <p>Member Details</p>
                        </div>
                        <div class="assign-complete-task">
                            <p>Assign Task</p>
                            <p>Complete Task</p>
                        </div>
                        <div class="show-count-task"></div>
                    </div>
                    
                    <button id="logoutEmployee">Logout</button>
                </div>
            `;

            const showdetails = document.getElementById('showdetails');
            const showImage = document.querySelector('.show-image img');
            const memberDetails = showdetails.querySelector('p');
            const calendar = document.getElementById('calendar');
            const leaves = [1, 5,, 7 ,10,11,16, 15]; // Sample leave days

            const member1 = document.querySelector('.team-member-1');
            const member2 = document.querySelector('.team-member-2');
            const member3 = document.querySelector('.team-member-3');
            
            member1.addEventListener('click', () => {
                showdetails.style.display = 'flex';
                showImage.src = 'dummy-person.jpg';
                memberDetails.textContent = 'Team Member 1 details';
                calendar.innerHTML = ''; // Clear previous calendar

                // Generate the calendar
                for (let i = 1; i <= 30; i++) {
                    const day = document.createElement('div');
                    day.classList.add('calendar-day');
                    if (leaves.includes(i)) {
                        day.classList.add('leave-taken');
                        day.textContent = i;
                    } else {
                        day.classList.add('no-leave');
                        day.textContent = i;
                    }
                    calendar.appendChild(day);
                }
            });
            member2.addEventListener('click', () => {
                showdetails.style.display = 'flex';
                showImage.src = 'dummy-person.jpg';
                memberDetails.textContent = 'Team Member 1 details';
                calendar.innerHTML = ''; // Clear previous calendar

                // Generate the calendar
                for (let i = 1; i <= 30; i++) {
                    const day = document.createElement('div');
                    day.classList.add('calendar-day');
                    if (leaves.includes(i)) {
                        day.classList.add('leave-taken');
                        day.textContent = i;
                    } else {
                        day.classList.add('no-leave');
                        day.textContent = i;
                    }
                    calendar.appendChild(day);
                }
            });
            member3.addEventListener('click', () => {
                showdetails.style.display = 'flex';
                showImage.src = 'dummy-person.jpg';
                memberDetails.textContent = 'Team Member 1 details';
                calendar.innerHTML = ''; // Clear previous calendar

                // Generate the calendar
                for (let i = 1; i <= 30; i++) {
                    const day = document.createElement('div');
                    day.classList.add('calendar-day');
                    if (leaves.includes(i)) {
                        day.classList.add('leave-taken');
                        day.textContent = i;
                    } else {
                        day.classList.add('no-leave');
                        day.textContent = i;
                    }
                    calendar.appendChild(day);
                }
            });

            document.getElementById('logoutEmployee').addEventListener('click', function () {
                apppage.innerHTML = originalContent;
                loginError.textContent = '';
            });
        }
    } else {
        loginError.textContent = "Invalid username or password.";
    }
});
