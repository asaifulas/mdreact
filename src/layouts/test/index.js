import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Test(){
    return (
        <DashboardLayout>
            <DashboardNavbar>
            <MDBox py={3}>



            <h1>test 1</h1>
            </MDBox>
            </DashboardNavbar>
        </DashboardLayout>

    );
}

export default Test;