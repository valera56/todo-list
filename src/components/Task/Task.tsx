import React, {useContext, useEffect, useState} from 'react';
import {todosContext} from "../../contexts/TodosContext";
// @ts-ignore
import style from "./Task.module.css";
import {useParams} from "react-router-dom";
import AddCommentary from "../../pages/commentary/AddCommentary";
const Task = () => {
    const {currentTodo: todo ,  editTodo,getCurrentTodo } = useContext(todosContext);
    const [isEdit, setIsEdit] = useState(false);
    const [editValueTitle, setEditValueTitle] = useState(todo.title);
    const [editValueText, setEditValueText] = useState(todo.text);
    const [editValueDataStart, setEditValueDataStart] = useState(todo.dataStart);
    const [editValueDataStop, setEditValueDataStop] = useState(todo.dataStop);
    const [editValueFile, setEditValueFile] = useState(todo.file);


    const handleSaveClick = () => {
        const editObj = {
            title: editValueTitle,
            text: editValueText,
            dataStart: editValueDataStart,
            dataStop: editValueDataStop,
            file: editValueFile,
        };
        editTodo(editObj,todo.id);
        setIsEdit(false);
    getCurrentTodo(id)
    };
    const {id} = useParams()
    useEffect(() => {
        getCurrentTodo(id)
    }, []);

    useEffect(() => {
        setEditValueTitle(todo.title)
        setEditValueText(todo.text)
        setEditValueDataStart(todo.dataStart)
        setEditValueDataStop(todo.dataStop)
    },[todo])

    const img = new Image()
    img.src = todo.file ?? ''
    return (
        <div className={style.task}>
            {isEdit ? (
                    <div className={style.modal}>
                        <input
                            className={style.InpEdit}
                            value={editValueTitle}
                            type="text"
                            onChange={(e) => setEditValueTitle(e.target.value)}
                        />
                        <input
                            className={style.InpEdit}
                            value={editValueText}
                            type="text"
                            onChange={(e) => setEditValueText(e.target.value)}
                        />
                        <input
                            className={style.InpEdit}
                            value={editValueDataStart}
                            type="date"
                            onChange={(e) => setEditValueDataStart(e.target.value)}
                        />
                        <input
                            className={style.InpEdit}
                            value={editValueDataStop}
                            type="date"
                            onChange={(e) => setEditValueDataStop(e.target.value)}
                        />
                        <input
                            className={style.InpEdit}
                            value={editValueFile}
                            type="file"
                            onChange={(e) => setEditValueFile(e.target.value)}
                        />
                        <button className={style.BtnSave} onClick={handleSaveClick}>
                            Save
                        </button>
                    </div>
            ) :
                <div className={style.blockTodo}>
                            <div className={style.blockTask}>
                                <div className={style.todo}>
                                    <div>
                                        <p className={style.todoId}>{todo.id}</p>
                                        <p className={style.todoTitle}>{todo.title}</p>
                                        <p className={style.todoText}>{todo.text}</p>
                                        <p className={style.todoDataStart}>Дата создания {todo.dataStart}</p>
                                        <p className={style.todoDataStop}>Дата окончания {todo.dataStop}</p>
                                    </div>
                                    <div>
                                     <img
                                         // @ts-ignore
                                         src={img}
                                     />
                                    </div>
                                </div>
                                <div className={style.blockEdit}>
                                    <button className={style.BtnEdit} onClick={() => setIsEdit(true)}>
                                        Edit
                                    </button>
                            </div>

                            </div>
                    <AddCommentary/>
                </div>
            }
        </div>
    );
};

export default Task;
