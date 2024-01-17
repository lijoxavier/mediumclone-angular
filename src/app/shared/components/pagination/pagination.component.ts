import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:"mc-pagination",
    templateUrl:"./pagination.component.html",
    standalone:true
})

export class PaginationComponent implements OnInit {
    @Input() total:number = 0;
    @Input() limit:number = 20;
    @Input() currentPage:number = 1;
    @Input() url:string = "";

    pagesCount:number = 1;

    ngOnInit(): void {
        this.pagesCount = Math.ceil(this.total/this.limit)
        console.log(this.pagesCount);
        
    }
}