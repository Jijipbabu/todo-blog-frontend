2.	 JS / TODO.JS


                  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

                  function renderTasks() {
                       const list = document.getElementById("taskList");
                       list.innerHTML = "";
                       tasks.forEach((task, index) => {
                          const li = document.createElement("li");
                          li.className = task.completed ? "completed" : "";
                          li.innerHTML = `
                              ${task.text}
                              <span>
                                <button onclick="toggleComplete(${index})">✔</button>
                                <button onclick="deleteTask(${index})">🗑</button>
                              </span>
                          `;
                          list.appendChild(li);
                         });
                      }

                      function addTask() {
                          const input = document.getElementById("taskInput");
                          const text = input.value.trim();
                          if (text !== "") {
                              tasks.push({ text, completed: false });
                              localStorage.setItem("tasks", JSON.stringify(tasks));
                              input.value = "";
                              renderTasks();
                           }
                        }

                      function toggleComplete(index) {
                          tasks[index].completed = !tasks[index].completed;
                          localStorage.setItem("tasks", JSON.stringify(tasks));
                          renderTasks();
                        }

                       function deleteTask(index) {
                           tasks.splice(index, 1);
                           localStorage.setItem("tasks", JSON.stringify(tasks));
                           renderTasks();
                        }

                       renderTasks();

            


