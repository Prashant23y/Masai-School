function accessManagementSystem(person) {
    if (person.role === "admin") {
        if (!person.active) {
            return "Admin Access Revoked";
        }
        if (person.experience > 5) {
            if (person.department === "IT") {
                return "Full IT Admin Access";
            } else {
                return "Full General Admin Access";
            }
        }
        return "Limited Admin Access";
    }

    if (person.role === "manager") {
        if (!person.active) {
            return "Manager Access Revoked";
        }
        if (person.experience > 3) {
            if (person.department === "Sales") {
                return "Full Sales Manager Access";
            } else {
                return "Full Manager Access";
            }
        }
        return "Limited Manager Access";
    }

    if (person.role === "user") {
        if (!person.active) {
            return "User Access Revoked";
        }
        if (person.department === "Support") {
            return "Priority Support Access";
        } else {
            return "User Access";
        }
    }

    return "Invalid Role";
}

console.log(getAccess({ role: "admin", experience: 7, active: true, department: "IT" }));       // "Full IT Admin Access"
console.log(getAccess({ role: "manager", experience: 4, active: true, department: "Marketing" })); // "Full Manager Access"
console.log(getAccess({ role: "user", experience: 2, active: true, department: "Support" }));    // "Priority Support Access"
console.log(getAccess({ role: "admin", experience: 3, active: false, department: "Finance" }));  // "Admin Access Revoked"
console.log(getAccess({ role: "guest", experience: 1, active: true, department: "HR" }));       // "Invalid Role"
