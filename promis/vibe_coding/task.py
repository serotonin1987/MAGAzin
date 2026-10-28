# # class Task() no priority
# from dataclasses import dataclass


# @dataclass 
# class Task:
#     id: int
#     title: str
#     priority: str = "medium"
#     done: bool = False

# def __post_init__(self) -> None:
#     """Проверяет корректность названия и приоритета задачи."""
#     if not self.title.strip():
#         raise ValueError("Название задачи не должно быть пустым.")

#     if self.priority not in ("low", "medium", "high"):
#         raise ValueError(
#             "Приоритет должен быть одним из значений: "
#             "'low', 'medium', 'high'."
#         )


# class Test_Anuar_pytest(***args, **kwargs):
    
# # *args, 
# # **kwargs 
# # self

"""Модель задачи."""

from dataclasses import dataclass


@dataclass
class Task:
    """Представляет задачу с приоритетом и статусом выполнения."""

    id: int
    title: str
    priority: str = "medium"
    done: bool = False

    def __post_init__(self) -> None:
        """Проверяет корректность названия и приоритета."""
        if not self.title.strip():
            raise ValueError("Название задачи не должно быть пустым.")

        if self.priority not in ("low", "medium", "high"):
            raise ValueError(
                "Приоритет должен быть одним из значений: "
                "'low', 'medium', 'high'."
            )