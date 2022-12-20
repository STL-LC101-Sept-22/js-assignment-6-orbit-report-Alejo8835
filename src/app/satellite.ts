export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if (this.type === 'Space Debris') {
			return true;
		} else {
			return false;
		}
		
   }
   zebraStripe(even): boolean {
	return even.indexOf(this) % 2 === 0 && this.type !== 'Space Debris';
   }
}

// TODO 3a: fix isSpaceDebris check
