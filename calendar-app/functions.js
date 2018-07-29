class Calendar {
    constructor() {
        this.today = new Date();
        this.wrapper = document.querySelector(".wrapper");
        this.render();
    }
    
    getDaysInMonth() {
        let clone = new Date(this.today);
        clone.setDate(1);
        clone.setMonth(clone.getMonth() + 1);
        clone.setDate(0);
        return clone.getDate();
    }
    render() {
        this.wrapper.innerHTML = '';
        this.renderHeader();
        this.renderMonthly();
    }
    renderHeader() {
        let today = this.today;
        let wrapper = this.wrapper;

        let header = document.createElement("div");
        header.classList.add('header')
    
        // prev buttn
        let prevYearBtn = document.createElement("button");
        prevYearBtn.innerText = "<<";
        header.appendChild(prevYearBtn);
    
        let prevBtn = document.createElement("button");
        prevBtn.innerText = "<"
        prevBtn.addEventListener('click', function() {
            today.setMonth(today.getMonth() - 1);
            render();
        });
        header.appendChild(prevBtn);
    
        // title
        let title = document.createElement("div");
        title.innerText = today.getFullYear() + "-" + (today.getMonth()+1);
        header.appendChild(title);
    
        // next buttn
        let nextBtn = document.createElement("button");
        nextBtn.innerText = ">"
        nextBtn.addEventListener('click', function() {
            today.setMonth(today.getMonth() + 1);
            render();
        });
        header.appendChild(nextBtn);
    
        // prev button
    
        wrapper.appendChild(header);
    }
    renderMonthly() {
        let today = this.today;
        let wrapper = this.wrapper;
    
        let clone = new Date(today);
        clone.setDate(1);
    
        // empty cells
        for(let i=0; i<clone.getDay(); i++) {
            let day = document.createElement("div");
            day.innerText = '';
            day.classList.add('day');
            wrapper.appendChild(day);
        }
    
        // 1~30
        for(let i=0; i<this.getDaysInMonth(); i++) {
            let day = document.createElement("div");
            day.innerText = i+1;
            day.classList.add('day');
            wrapper.appendChild(day);
        }
    
        // empty cells
        let totalCells = clone.getDay() + this.getDaysInMonth();
        
        let numTrailing = 7 - (totalCells % 7);
        for(let i=0; i<numTrailing; i++) {
            let day = document.createElement("div");
            day.innerText = '';
            day.classList.add('day');
            wrapper.appendChild(day);
        }
    }
}