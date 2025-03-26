export class Task {
    constructor(title, description, priority = 'medium') {
        this.id = Task.nextId++;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
    }

    static nextId = 1;

    static getAll() {
        return this.tasks;
    }

    static add(task) {
        this.tasks.push(task);
    }

    static delete(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    static deleteAll() {
        this.tasks = [];
        this.nextId = 1;
    }

    static toggle(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

    static filter(search) {
        if (!search) return this.tasks;
        return this.tasks.filter(task => 
            task.title.toLowerCase().includes(search.toLowerCase()) || 
            task.description.toLowerCase().includes(search.toLowerCase())
        );
    }
}

// Initialize tasks array
Task.tasks = []; 