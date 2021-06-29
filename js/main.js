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
    const mQuery = window.matchMedia('(max-width: 620px)');
    let mobileSlider = {
        target: '#js_slider',
        values: [
            1, 2, 3, 4
        ],
        tooltip: false,
        scale: true,
        labels: true,
        set: 2
    }

    let desktopSlider = {
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
    }

    let mySlider = new rSlider(desktopSlider);

    if (mQuery.matches) {
        mySlider.destroy();
        mySlider = new rSlider(mobileSlider);
    }

    function changeToMobile(e) {
        if (e.matches) {
            mySlider.destroy();
            mySlider = new rSlider(mobileSlider);
        } else {
            mySlider.destroy();
            mySlider = new rSlider(desktopSlider);
        }
    }

    mQuery.addListener(changeToMobile);

    const menu = new MmenuLight(
        document.querySelector( "header nav" ), "(max-width: 620px)"
    );

    const navigator = menu.navigation();
    const drawer = menu.offcanvas();

    navigator.openPanel(
        document.querySelector( "#menu" )
    );

    document.querySelector( 'a[href="#menu"]' )
            .addEventListener( 'click', ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
    });

    document.querySelector( 'a[href="#close"]' )
        .addEventListener( 'click', ( evnt ) => {
            evnt.preventDefault();
            drawer.close();
        });
});