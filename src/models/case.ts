export default interface ICase {
    id: number;
    support_type_id: number;
    user_id: number;
    technician_id?: number;
    description: string;
    case_status: string;
    scheduled_date?: string;
    time_in?: string;
    time_out?: string;
    created_at: string;
    register_status: string;
} 