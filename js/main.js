function years(tags, startY, endY, selected)
{
    if(tags == '')
    {
        var years = "";
        for (i = startY; i < endY + 1;  i++ )
        {
            years += i;
        }
    }
    else
    {
        var years = "";
        for (i = startY; i < endY + 1;  i++ )
        {
            if (selected == i) {
                years += "<" + tags +" selected>" + i +"</" + tags +">";
            } else {
                years += "<" + tags +">" + i +"</" + tags +">";
            }
        }	
    }
							
    var multiple_list = document.getElementsByClassName("bear-years");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = years;
    }	
}

document.addEventListener( "DOMContentLoaded", function(){
    years('option', 1998, 2021, 1998);
    NiceSelect.bind(document.getElementById("date"));
    const placeAll = document.querySelectorAll('input[type="text"]');
    placeAll.forEach(place => {
        place.addEventListener('change', (event) => {
            const title = place.parentElement.querySelector('.title');
            if (event.target.value !== '') {
                title.style.display = 'flex';
            } else {
                title.style.display = 'none';
            }
        })
    });
    
    if (window.matchMedia("(max-width: 620px)").matches) {
        const mySlider = new rSlider({
            target: '#js_slider',
            values: [
                1, 2, 3, 4
            ],
            tooltip: false,
            scale: true,
            labels: true,
            set: [3]
        });
    } else {
        const mySlider = new rSlider({
            target: '#js_slider',
            values: [
                'Не владею',
                'Использую готовые решения' ,
                'Использую готовые решения и умею и переделывать' ,
                null ,
                'Пишу сложный JS с нуля'
            ],
            tooltip: false,
            scale: true,
            labels: true,
            set: ['Использую готовые решения и умею и переделывать']
        });
    }
});
