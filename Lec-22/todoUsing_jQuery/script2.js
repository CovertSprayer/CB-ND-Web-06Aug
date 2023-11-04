

$('form').on('submit', (e)=>{
    e.preventDefault();
    const text = $('.inp').val();
    $('.inp').val(' ');

    let str = `<div class="section-A">
                    <input class="check" type="checkbox">
                    <p class="text">${text}</p>
                </div>
                <div class="section-B">
                    <li class="up-arrow">🔼</li>
                    <li class="bin">🗑️</li>
                    <li class="down-arrow">🔽</li>
                </div>`
    
    const div = $('<div>').addClass('todo').html(str);
    $('.todo-list').append(div);
})

$('.todo-list').on('click', function(e){

    const className = $(e.target).attr('class');
    if(className === 'bin'){
        $(e.target).parent().parent().remove();
    }

    else if(className === 'down-arrow'){
        const currElem = $(e.target).parent().parent();
        const nextElem = currElem.next();

        nextElem.after(currElem);
    }

    else if(className === 'up-arrow'){
        const currElem = $(e.target).parent().parent();
        const prevElem = currElem.prev();

        prevElem.before(currElem);
    }

    else if(className === 'check'){
        $(e.target).next().toggleClass('line');
    }

})