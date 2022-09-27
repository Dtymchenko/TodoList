import React from 'react';

const Item = ({ items, setItems, filtered, setFiltered }) => {

    const removeItem = (id) => {
        setItems([...items.filter((item) => item.id !== id)])
    }

    const handleIsDone = (id) => {
        setItems([...items.map((item) => item.id === id ? {...item, isDone: !item.isDone} : {...item})])
    }

    return (
        <section className='items flex flex-col items-center'>
            {
                filtered.length ?
                filtered.map((item) => 
                    <div key={item.id} className='item mb-5 flex justify-center items-center'>
                <div
                onClick={() => {handleIsDone(item.id)}}
                className={item.isDone ? 'item__name cursor-pointer line-through flex justify-center items-center h-[45px] max-w-3xl bg-red-300 opacity-40 hover:bg-red-500 rounded-md overflow-auto' :
                'item__name cursor-pointer flex justify-center items-center h-[45px] max-w-3xl bg-white hover:bg-yellow-300 rounded-md overflow-auto'}>
                    {item.text}
                </div>
                <div
                className='item__complete h-[45px] w-[35px] flex justify-center items-center border bg-blue-200 rounded-md ml-2 mr-2'
                onClick={() => {handleIsDone(item.id)}}>
                    <img className='cursor-pointer' src={!item.isDone ? '/icons8-check-mark-96.png' : '/warning-2-xxl.png'} width={40} alt='check'></img>
                </div>
                <div 
                className='item__delete h-[45px] border bg-indigo-500 rounded-md'
                onClick={() => {removeItem(item.id)}}
                >
                    <img className='cursor-pointer' src='/icons8-remove-100.png' width={40} alt='remove'></img>
                </div>
            </div>
                ) : 
                <div className='text-white font-bold'>No tasks yet</div>
            }
        </section>
    );
}

export default Item;
