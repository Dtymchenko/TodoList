import React from 'react';

const Item = ({ items, setItems }) => {

    const removeItem = (id) => {
        setItems([...items.filter((item) => item.id !== id)])
    }

    const handleIsDone = (id) => {
        setItems([...items.map((item) => item.id === id ? {...item, isDone: !item.isDone} : {...item})])
    }

    return (
        <section className='items flex flex-col items-center'>
            {
                items.map((item) => 
                    <div key={item.id} className='item mb-5 flex justify-center items-center'>
                <div
                onClick={() => {handleIsDone(item.id)}}
                className={item.isDone ? 'item__name cursor-pointer line-through flex justify-center items-center h-[45px] w-[200px] bg-red-300 opacity-40' :
                'item__name cursor-pointer flex justify-center items-center h-[45px] w-[200px] bg-white'}>
                    {item.text}
                </div>
                <div
                className='item__complete h-[45px] w-[35px] flex justify-center items-center border bg-blue-200'
                onClick={() => {handleIsDone(item.id)}}>
                    <img className='cursor-pointer' src='/icons8-check-mark-96.png' width={40} alt='check'></img>
                </div>
                <div 
                className='item__delete h-[45px] border bg-indigo-500'
                onClick={() => {removeItem(item.id)}}
                >
                    <img className='cursor-pointer' src='/icons8-remove-100.png' width={40} alt='remove'></img>
                </div>
            </div>
                )
            }
        </section>
    );
}

export default Item;
