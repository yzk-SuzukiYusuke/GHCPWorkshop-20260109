#!/usr/bin/env python3
"""
シンプルなTodo管理CLIツール
使い方:
  python todo.py add "タスク内容"     # タスクを追加
  python todo.py list                 # 全タスクを表示
  python todo.py done <ID>            # タスクを完了にする
  python todo.py delete <ID>          # タスクを削除
"""

import json
import sys
import os
from datetime import datetime

# データファイルのパス
TODO_FILE = "todo.json"


def load_todos():
    """todo.jsonからタスクを読み込む"""
    if not os.path.exists(TODO_FILE):
        return []
    
    try:
        with open(TODO_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError:
        return []


def save_todos(todos):
    """タスクをtodo.jsonに保存"""
    with open(TODO_FILE, "w", encoding="utf-8") as f:
        json.dump(todos, f, ensure_ascii=False, indent=2)


def add_task(title):
    """新しいタスクを追加"""
    todos = load_todos()
    
    # 新しいIDを生成（既存の最大ID + 1）
    new_id = max([task["id"] for task in todos], default=0) + 1
    
    new_task = {
        "id": new_id,
        "title": title,
        "done": False,
        "created_at": datetime.now().isoformat()
    }
    
    todos.append(new_task)
    save_todos(todos)
    
    print(f"✓ タスクを追加しました (ID: {new_id})")


def list_tasks():
    """全タスクを一覧表示"""
    todos = load_todos()
    
    if not todos:
        print("タスクがありません")
        return
    
    print("\n=== Todo リスト ===")
    for task in todos:
        status = "✓" if task["done"] else " "
        print(f"[{status}] {task['id']:2d}. {task['title']}")
    print()


def mark_done(task_id):
    """タスクを完了にする"""
    todos = load_todos()
    
    for task in todos:
        if task["id"] == task_id:
            task["done"] = True
            save_todos(todos)
            print(f"✓ タスク {task_id} を完了にしました")
            return
    
    print(f"✗ ID {task_id} のタスクが見つかりません")


def delete_task(task_id):
    """タスクを削除"""
    todos = load_todos()
    
    for i, task in enumerate(todos):
        if task["id"] == task_id:
            todos.pop(i)
            save_todos(todos)
            print(f"✓ タスク {task_id} を削除しました")
            return
    
    print(f"✗ ID {task_id} のタスクが見つかりません")


def show_help():
    """使い方を表示"""
    print(__doc__)


def main():
    """メイン処理"""
    if len(sys.argv) < 2:
        show_help()
        return
    
    command = sys.argv[1]
    
    if command == "add":
        if len(sys.argv) < 3:
            print("✗ タスクの内容を指定してください")
            print('例: python todo.py add "買い物に行く"')
            return
        title = " ".join(sys.argv[2:])
        add_task(title)
    
    elif command == "list":
        list_tasks()
    
    elif command == "done":
        if len(sys.argv) < 3:
            print("✗ タスクIDを指定してください")
            print("例: python todo.py done 1")
            return
        try:
            task_id = int(sys.argv[2])
            mark_done(task_id)
        except ValueError:
            print("✗ タスクIDは数値で指定してください")
    
    elif command == "delete":
        if len(sys.argv) < 3:
            print("✗ タスクIDを指定してください")
            print("例: python todo.py delete 1")
            return
        try:
            task_id = int(sys.argv[2])
            delete_task(task_id)
        except ValueError:
            print("✗ タスクIDは数値で指定してください")
    
    else:
        print(f"✗ 不明なコマンド: {command}")
        show_help()


if __name__ == "__main__":
    main()
