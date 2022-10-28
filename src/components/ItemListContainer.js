const ItemListContainer=(props)=>{
    return(
<main>
<div  id="itemList">
 <ul class="list-group">
 <li class="list-group-item ">{props.text}</li>
</ul>
    </div>
</main>
    );
}

export default  ItemListContainer;
