(function(d){
	var thismany = 2500,
	btn = d.querySelector('button'),
	demo = d.querySelector('.demo'),
	clickhandler = function(){
		var i = 0, 
		docfrag = d.createDocumentFragment(), 
		n = thismany, p,
		sentence = 'Lorem ipsum dolar sit amet consecutum.';
		
		while( i < n ){
			p = (p !== undefined) ? p = p.cloneNode(false) : p = d.createElement('p');
			if(!p.textContent){ p.textContent = sentence; }
			docfrag.appendChild(p);
			i++;
		}		
		demo.appendChild(docfrag);
	}
	btn.addEventListener('click',clickhandler,false);	
})(document)