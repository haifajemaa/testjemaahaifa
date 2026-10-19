import { Component ,input,output} from '@angular/core';
import { Trip } from '../../models/trip';
import { PeroidPipe } from '../../peroid-pipe';
@Component({
  imports: [PeroidPipe],
  selector: 'jema-trip-item',
  styleUrl: './trip-item.css',
  templateUrl: './trip-item.html',
})
export class TripItem {
  voyage=input.required<Trip>();
  nombreplace=output<number>();
   decrement(id:number){
    this.nombreplace.emit(id);
   }
  aff(nb:number){
    
  }
}
