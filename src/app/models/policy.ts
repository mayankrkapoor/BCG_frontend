export class Policy {
    constructor(
        public policy_id:number,
        public dop:Date,
        public customer_id:number,
        public fuel:string,
        public vehicle_segment:string,
        public premimun:string,
        public bodily_injury_liability:string,
        public personal_injury_protection:string,
        public property_damage_liability:string,
        public collision:string,
        public comprehensive:string,
        public customer_gender:string,
        public customer_income_group:string,
        public customer_region:string,
        public customer_martial_status:string
    ) {}

}
