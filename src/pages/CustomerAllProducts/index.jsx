import React, { useState, useEffect } from "react";
import Task from "../../components/CustomerProducts";
import NoData from "../NoData";
import { allCustomerWithOrderedProducts } from "../../constants";

export default function AllCutomerWithOrderedProducts() {
    const [task, setCurrentTask] = useState(null)
    const [ updatedAllCustomerWithOrderedProducts, setUpdatedAllCustomerWithOrderedProducts] = React.useState(null);

    const handleCurrentTask = (task) => {
        setCurrentTask(task);
        console.log(task);
    };

    function getCustomerOrderStatusView() {
        if (!allCustomerWithOrderedProducts) return;
        
        let updatedArray = []

        allCustomerWithOrderedProducts && allCustomerWithOrderedProducts.forEach((mainElem) => {
            let pendingStatus = []
            let completedStatus = []
            let rejectedStatus = []
            let warningStatus = []

            mainElem.products && mainElem.products.forEach((p_elem) => {

                if (p_elem.status === "pending") {
                    pendingStatus.push(p_elem.status)
                }
                else if (p_elem.status === "rejected") {
                    rejectedStatus.push(p_elem.status)
                }
                else if (p_elem.status === "completed") {
                    completedStatus.push(p_elem.status)
                }
                else {
                    warningStatus.push("warning")
                }

            })

            if (warningStatus.length) updatedArray.push({ ...mainElem, status: "warning" })

            else if (rejectedStatus.length) updatedArray.push({ ...mainElem, status: "rejected" })

            else if (pendingStatus.length) updatedArray.push({ ...mainElem, status: "pending" })

            else updatedArray.push({ ...mainElem, status: "completed" })

        })
        
        setUpdatedAllCustomerWithOrderedProducts(updatedArray)
    }

    useEffect(function () {
        getCustomerOrderStatusView()
    }, [allCustomerWithOrderedProducts])

    return (
        <section className="px-4 sm:px-3 min-h-screen">
            {updatedAllCustomerWithOrderedProducts && updatedAllCustomerWithOrderedProducts.length ? updatedAllCustomerWithOrderedProducts.map((elem, index) => (
                <Task
                    elem={elem}
                    key={index}
                    handleCurrentTask={handleCurrentTask}
                />
            )) : (
                <NoData />
            )
            }
        </section>

    );
};