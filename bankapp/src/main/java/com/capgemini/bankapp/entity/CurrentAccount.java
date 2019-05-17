package com.capgemini.bankapp.entity;

import javax.persistence.Entity;

@Entity
//@Inheritance(strategy=InheritanceType.JOINED)

public class CurrentAccount extends BankAccount{

	
	private int odLimit;

	

	public CurrentAccount() {
		super();
	}

	public CurrentAccount( String accountHolderName, int accountBalance,String accountType,int odLimit) {
		super(accountHolderName, accountBalance,accountType);
		this.odLimit = odLimit;
	}

	public int getOdLimit() {
		return odLimit;
	}

	public void setOdLimit(int odLimit) {
		this.odLimit = odLimit;
	}
	
	
}
