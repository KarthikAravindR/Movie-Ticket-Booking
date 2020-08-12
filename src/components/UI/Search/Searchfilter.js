export default function searchfilter(searchText, tasks) {
    return tasks
        .filter(task => {
            if (task.name.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (task.genre1.toLowerCase().includes(searchText)) {
                return true;
            }
            return false;
        });
        
}