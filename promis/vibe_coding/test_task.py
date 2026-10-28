"""Автоматические тесты проекта Task."""

import unittest

from task import Task
from taskmanager import TaskManager


class TestTask(unittest.TestCase):
    """Тесты модели Task."""

    def test_default_values(self):
        task = Task(1, "Изучить Python")

        self.assertEqual(task.priority, "medium")
        self.assertFalse(task.done)

    def test_valid_priorities(self):
        for priority in ("low", "medium", "high"):
            with self.subTest(priority=priority):
                task = Task(1, "Тест", priority)
                self.assertEqual(task.priority, priority)

    def test_empty_title_raises_error(self):
        for title in ("", "   ", "\t\n"):
            with self.subTest(title=repr(title)):
                with self.assertRaises(ValueError):
                    Task(1, title)

    def test_invalid_priority_raises_error(self):
        with self.assertRaises(ValueError):
            Task(1, "Тест", "urgent")

    def test_title_is_preserved(self):
        task = Task(1, "  Моя задача  ")

        self.assertEqual(task.title, "  Моя задача  ")


class TestTaskManager(unittest.TestCase):
    """Тесты менеджера задач."""

    def setUp(self):
        """Создаёт новый менеджер перед каждым тестом."""
        self.manager = TaskManager()

    def test_add_task(self):
        task = self.manager.add_task("Написать код", "high")

        self.assertEqual(task.id, 1)
        self.assertEqual(task.title, "Написать код")
        self.assertEqual(task.priority, "high")
        self.assertFalse(task.done)

    def test_ids_increment(self):
        first = self.manager.add_task("Первая")
        second = self.manager.add_task("Вторая")

        self.assertEqual(first.id, 1)
        self.assertEqual(second.id, 2)

    def test_invalid_task_is_not_added(self):
        with self.assertRaises(ValueError):
            self.manager.add_task("   ")

        task = self.manager.add_task("Корректная задача")
        self.assertEqual(task.id, 1)

    def test_complete_task(self):
        task = self.manager.add_task("Завершить проект")

        self.manager.complete_task(task.id)

        self.assertTrue(task.done)

    def test_complete_missing_task(self):
        with self.assertRaises(KeyError):
            self.manager.complete_task(999)

    def test_delete_task(self):
        task = self.manager.add_task("Удалить задачу")

        self.manager.delete_task(task.id)

        self.assertNotIn(task.id, self.manager._tasks)

    def test_delete_missing_task(self):
        with self.assertRaises(KeyError):
            self.manager.delete_task(999)


if __name__ == "__main__":
    unittest.main(verbosity=2)