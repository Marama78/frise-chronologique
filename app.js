$(function(){
    var itemLength= 17, 
    currentItem=0;
    var choosenIndex=0;
   var allItems="",
    rootIndex = 0,oldIndex=0,
    limitButton = 2;

   var Description = [];
   Description[0] = "Introduction";
   Description[1] = "Installer Jquery";
   Description[2] = "Les selecteurs";
   Description[3] = "Les évènements";
   Description[4] = "Les effets partie1";
   Description[5] = "Les effets partie2";
   Description[6] = "Manipuler le HTML";
   Description[7] = "Manipuler le CSS";
   Description[8] = "Arborescence de JQuery";
   Description[9] = "Le concept de Ajax";
   Description[10] = "On commence le projet";
   Description[11] = "On continue de coder notre page web";
   Description[12] = "Trouver les polices de caractères";
   Description[13] = "Les ouvertures";
   Description[14] = "Afficher les descriptions";
   Description[15] = "Interactivité";
   Description[16] = "Animation de départ";


    /*----------------
    ** Instantiate the function that will Load the movies
    ------------------*/
    function LoadItem(itemChoosen){

        // Load the movie at the index
        $('.smartBox').html("<p id='description'>"+Description[itemChoosen]+"</p><video  id='media' src='images/chap"+itemChoosen+".mp4' controls></video>");

        /*$('#description').css({
            'opacity':'1',
            color: "#fff",
            "text-shadow": "1px 1px 1px #000"});*/


         
    };

   
// hide or show some buttons
    function PopButton(_index, _limit){
        
        if(_index<=$('#buttonBox').children('li').length)
        {
            rootIndex = _index - _limit;
        }

       if(_index>oldIndex)
        {
            for(i=0;i<rootIndex;i++){
               var target = $('#buttonBox').children('li').eq(i);
               target.hide();

            }

        oldIndex = _index;

        }

         if(_index<oldIndex)
        {
            if(_index==0)
            {
                rootIndex=0;
                oldIndex=0;

                for(i=0;i<itemLength;i++)
                { 
                    var target = $('#buttonBox').children('li').eq(i);
                    target.show();
                }
            }
            else
            {
            for(i=rootIndex;i<_index;i++){ 
                var target = $('#buttonBox').children('li').eq(i);
                target.show();
            }
            oldIndex = _index;
            }
        }
    }

    /*----------------
    ** Set the number of the movies and
    ** Build all the videos in the ul {id='videoBox'}
    ------------------*/
    if(currentItem<itemLength)
        {for(var i=0;i<itemLength;i++){

            allItems +="<li id='lineMedia' style='overflow:hidden;' ><video class='buttonMedia' src='images/chap"+currentItem+".mp4' ></video></li>"; 

            currentItem +=1;
        };
        $('#buttonBox').html(allItems);
    };

    /*---------------
    ** The buttons above the document
    ----------------- */

    

    $('.buttonMedia').on('click',function(){

        var target = $('#buttonBox').children('li').eq(choosenIndex);
        
        target.children('.buttonMedia').css({"border": "2px solid #222"})

        var Index = $(this).parent().index();
        LoadItem(Index);
        PopButton(Index,limitButton); 
        choosenIndex=Index;

        $(this).css({"border": "4px solid #fff"});
    });

    $('.buttonMedia').hover(
        function(){
            var Index = $(this).parent().index();

            if(choosenIndex!=Index)
            {
            $(this).css({"border": "4px solid rgb(255, 11, 11)"});
             }
        },
        function(){
            var Index = $(this).parent().index();
            if(choosenIndex!=Index)
            {
                $(this).css({"border": "2px solid #222"});
            }
            
        });
    


    $('#showLeft').on('click',   function(){

        var oldMedia = $('#buttonBox').children('li').eq(choosenIndex);
        
        oldMedia.children('.buttonMedia').css({"border": "2px solid #222"});

        if(choosenIndex==0)
        {
            var Index = $('#buttonBox').children('li').length-1;
            LoadItem(Index);
            PopButton(Index,limitButton);  
            choosenIndex=Index;
        }
         else{
            var Index = choosenIndex-1;
            LoadItem(Index);
            PopButton(Index,limitButton);
            choosenIndex=Index;
        }

        var newMedia = $('.buttonMedia').parent().eq(Index);
        newMedia.children('.buttonMedia').css({"border": "4px solid #fff"});
    });
    
   

    $('#showRight').on('click',function(){
        var oldMedia = $('#buttonBox').children('li').eq(choosenIndex);
        oldMedia.children('.buttonMedia').css({"border": "2px solid #222"});

        if(choosenIndex==$('#buttonBox').children('li').length-1)
        {
            var Index = 0;
            LoadItem(Index);
            PopButton(Index,limitButton);
            choosenIndex=Index; 
        }
        else{
            var Index = choosenIndex+1;
            LoadItem(Index);
            PopButton(Index,limitButton);
            choosenIndex=Index;
        }

        var newMedia = $('.buttonMedia').parent().eq(Index);
        newMedia.children('.buttonMedia').css({"border": "4px solid #fff"});
    });
});