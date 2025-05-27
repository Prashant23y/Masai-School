const userList = document.getElementById('user-list');
const sortSelect = document.getElementById('sort-select');

let users = [];

// Fetch users from the API
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    userList.innerHTML = '<p style="color: red;">Failed to load users.</p>';
  }
}

// Render users to the DOM
function renderUsers(userArray) {
  userList.innerHTML = '';
  userArray.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-item';
    div.innerHTML = `<strong>${user.name}</strong><br><em>${user.email}</em>`;
    userList.appendChild(div);
  });
}

// Sort users based on selected criteria
function sortUsers(order) {
  const sortedUsers = [...users].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return order === 'asc' ? -1 : 1;
    }
    if (nameA > nameB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
  renderUsers(sortedUsers);
}

// Event listener for sort selection
sortSelect.addEventListener('change', (e) => {
  sortUsers(e.target.value);
});

// Initial fetch
fetchUsers();