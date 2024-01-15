import { VirtualMachine } from "./type"
export const data:VirtualMachine[] = [
    {
        id:1,
        project_name: "Project 1",
        service_type: "VM",
        vm_type: "Database",
        name: "VM 1",
        cpu: 1,
        memory: 1,
        hdd: 1,
        disk_type: "Disk Type 1",
        operating_system: "Operating System 1",
        vm_status: "active-running",
        price: 9000,
        ip_public: "1.1.1.1",
        ip_local: "2.2.2.2",
        port: 8080,
        vpc_name: "VPC Name 1",
        no_modin: "No Modin 1",
        contract_request_type: "New",
        contract_document_date: "2022-01-01",
        deployement_date: "2022-01-02",
        contract_duration: "15",
        contract_expired: "2022-01-15",
        request_based_type: "perpanjangan",
        segment: "sso",
        gl_account: "123456",
        cost_center: "123456",
        site_location: "neucentrix-meruya",
        purpose: "Cust-Prod",
        user_id: 1
    },
    {
        id:2,
        project_name: "Project 1",
        service_type: "Load Balancer",
        vm_type: "Service",
        name: "VM 1",
        cpu: 1,
        memory: 1,
        hdd: 1,
        disk_type: "Disk Type 1",
        operating_system: "Operating System 1",
        vm_status: "active-stopped",
        price: 9000,
        ip_public: "1.1.1.1",
        ip_local: "2.2.2.2",
        port: 8080,
        vpc_name: "VPC Name 1",
        no_modin: "No Modin 1",
        contract_request_type: "New",
        contract_document_date: "2022-01-01",
        deployement_date: "2022-01-02",
        contract_duration: "15",
        contract_expired: "2022-01-15",
        request_based_type: "perpanjangan",
        segment: "sso",
        gl_account: "123456",
        cost_center: "123456",
        site_location: "neucentrix-meruya",
        purpose: "Cust-Dev",
        user_id: 1
    }
]