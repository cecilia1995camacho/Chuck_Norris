function Timer(){
    this.i = 0

    this.timer = setInterval(function increase(){
        this.i++;
        console.log(this.i);
    }, 1000);
    }

    function Timer3(){
        this.i = 0;

        this.timer = setInterval(()=>{
            this.i++;
            console.log(this.i);
        }, 1000);
    }

            Timer3();
            
