"""Управление задачами."""

from task import Task


class TaskManager:
    """Добавляет, завершает и удаляет задачи."""

    def __init__(self) -> None:
        self._tasks: dict[int, Task] = {}
        self._next_id: int = 1

    def add_task(
        self, title: str, priority: str = "medium"
    ) -> Task:
        """Создаёт и сохраняет новую задачу."""
        task = Task(self._next_id, title, priority)
        self._tasks[task.id] = task
        self._next_id += 1
        return task

    def complete_task(self, task_id: int) -> None:
        """Отмечает задачу выполненной."""
        if task_id not in self._tasks:
            raise KeyError(f"Задача с ID {task_id} не найдена.")

        self._tasks[task_id].done = True

    def delete_task(self, task_id: int) -> None:
        """Удаляет задачу."""
        if task_id not in self._tasks:
            raise KeyError(f"Задача с ID {task_id} не найдена.")

        del self._tasks[task_id]
        
        
        
# Task.from django.utils.translation import pgettext_lazy

# def Anuar_django_proccess_test