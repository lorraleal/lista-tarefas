$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaData = $('#NovaData').val();
        const novaTarefa = $('#inserir-nova-tarefa').val();
        const novoItem = $('<li></li>');

        const tarefaText = document.createTextNode(novaTarefa);
        novoItem.append(tarefaText);
        novoItem.text(`Tarefa: ${novaTarefa} - Data: ${novaData}`);

        $('ul').append(novoItem);
    
            $(document).ready(function() {
            $('li').click(function() {
            $('li').css('text-decoration', 'line-through')
            });
        });    
    });
});