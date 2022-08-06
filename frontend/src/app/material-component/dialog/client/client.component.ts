import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { SellerService } from 'src/app/services/seller.service';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  onAddClient = new EventEmitter();
  onEditClient = new EventEmitter();
  clientForm: any = FormGroup;
  dialogAction: any = "Add";
  action: any = "Add";
  responseMessage: any;
  sellers: any = [];
  products: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private productService: ProductService,
    private sellerService: SellerService,
    public dialogRef: MatDialogRef<ClientComponent>,
    private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      email: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      sellerId: [null, [Validators.required]],
      productId: [null, [Validators.required]],
    });
    if (this.dialogData.action === "Editar") {
      this.dialogAction = "Editar";
      this.action = "Update";
      this.clientForm.patchValue(this.dialogData.data);
    }
    this.getSellers();
    this.getProducts();
  }

  getSellers() {
    this.sellerService.getSellers().subscribe((response: any) => {
      this.sellers = response;
    }, (error: any) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response;
    }, (error: any) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  handleSubmit() {
    if (this.dialogAction === "Editar") {
      this.edit();
    }
    else {
      this.add();
    }
  }

  add() {
    var formData = this.clientForm.value;
    var data = {
      name: formData.name,
      contactNumber: formData.contactNumber,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      sellerId: formData.sellerId,
      productId: formData.productId

    }
    this.clientService.add(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onAddClient.emit;
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage, "success")
    }, (error: any) => {
      this.dialogRef.close();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    })
  }

  edit() {
    var formData = this.clientForm.value;
    var data = {
      id: this.dialogData.data.id,
      name: formData.name,
      contactNumber: formData.contactNumber,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      sellerId: formData.sellerId,
      productId: formData.productId
    }
    this.clientService.update(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onEditClient.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage, "success")
    }, (error: any) => {
      this.dialogRef.close();
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      }
      else {
        this.responseMessage.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    })
  }
}