import React from 'react'
import { useCallback, useReducer, useEffect, useState} from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import produce from "immer";
import { useSelector, useDispatch } from 'react-redux';
import { syncTasksColumns } from 'store/actions/taskList';
import TrackIcon from "assets/img/icons/mc/png/14.png";
import BMWIcon from "assets/img/icons/mc/png/11.png";
import TrackTaskModal from './TrackTaskModal';


const dragReducer = produce((draft, action) => {
    switch (action.type) {
        case "MOVE": {
            draft[action.from] = draft[action.from] || [];
            draft[action.to] = draft[action.to] || [];
            const [removed] = draft[action.from].splice(action.fromIndex, 1);
            draft[action.to].splice(action.toIndex, 0, removed);
        }
    }
});

function PendingTaskList() {
    const [component, setComponent] = useState({
        openModal:false
    });
    const { pending_tasks, pending_tasks_column_names } = useSelector(state => state.taskListScreenReducer);
    const dispatch_redux = useDispatch();
    const [state, dispatch] = useReducer(dragReducer, {
        ...pending_tasks,
    });

    const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
            if (!result.destination) {
                return;
            }
            dispatch({
                type: "MOVE",
                from: result.source.droppableId,
                to: result.destination.droppableId,
                fromIndex: result.source.index,
                toIndex: result.destination.index,
            });
        }
    }, []);


    useEffect(() => {
        dispatch_redux(syncTasksColumns(state, "pending_tasks"));
    }, [state]);

    useEffect(() => {
        return () => {
            setComponent({
                ...component,
                openModal:false
            })
        };
    }, []);

    const _toggleModal = () => {
        setComponent({
            ...component,
            openModal:!component.openModal
        })
    }

    return (
        <div className="ltn__apartments-tab-content-inner">
            <TrackTaskModal  toggleModal={_toggleModal} openModal={component.openModal} />
            <DragDropContext onDragEnd={onDragEnd} >
                <div className='row'>
                    {Object.keys(state).map((k, index) => (
                        <div className="col-lg-3 col-md-3 col-sm-6" >
                            <div  className={`ltnd__tasks-item-column ltnd__tasks-column-border tasks-border-${index + 1}`}>
                                <h6>{pending_tasks_column_names[index]} ({state[k].length})</h6>
                                <Droppable droppableId={k} type="PERSON">
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                            style={{height:600, overflow:"auto"}}
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {state[k]?.map((person, index) => {
                                                    return (
                                                        <Draggable
                                                            key={person.id}
                                                            draggableId={person.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <div className="ltnd__tasks-item">
                                                                            <h6 className="ltnd__product-title"><a href="#"><img src={BMWIcon} alt="#" /> AB-123</a></h6>
                                                                            <p className="ltnd__space-between">Policy no. <strong>10/tpl2020/001</strong></p>
                                                                            <p className="ltnd__space-between">Claim no. <strong>10/tpl2020/001</strong></p>
                                                                            <p className="ltnd__space-between">Claim type <strong>Front glass</strong></p>
                                                                            <p className="ltnd__space-between">Incident date <strong>Dec 12, 2021</strong></p>
                                                                            <div className="btn-wrapper ltnd__space-between">
                                                                                <a className="ltn__secondary-color" href="claim-details.html"><strong>Claim details</strong></a>
                                                                                <a className="ltn__secondary-color" onClick={_toggleModal} role="button" title="Quick View" ><img src={TrackIcon} alt="#" /> Track</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    ))}
                </div>
            </DragDropContext>
        </div>
    )
}

export default PendingTaskList;