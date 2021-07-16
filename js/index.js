
$(".agregar").on("click",function(e){

    e.preventDefault();
    var lab = $("#newText").val();

    $('.Lista').append(
        $(document.createElement('div')).prop({
            id: 'list',
            class: 'lis',
            
        }).append(
            $(document.createElement('li')).prop({
                for: 'list'
            }).append(
                $(document.createElement('p')).prop({
                    for: 'list'
                }).html(lab)
            )            .append(
                $(document.createElement('button')).prop({
                    id: 'checar',
                    class: 'checar'
                }).html('Checar')
            )            .append(
                $(document.createElement('button')).prop({
                    id: 'del',
                    class: 'del'  
                }).html('Delete'))
        ));
});

$(".checar").click(function(){
    $("p").toggleClass("chec > p");
});

$(".del").click(function(){
    $(this).parent().$(this).parent().remove();
});

