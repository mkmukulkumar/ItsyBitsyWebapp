import React from "react"
import "./HoldingsItem.css"
export const NotificationItem=({Notificationslist})=>{
    return(
        <div className="stockholdinglist">
            <div className="Notficationsingleentry">
                <text className="entryheading">{Notificationslist.notify} {Notificationslist.qty} shares {Notificationslist.stock} at Rs.{Notificationslist.price}/-</text>
                <div>
                    <button type="button" class="btn btn-primary">Accept</button>
                    <button type="button" class="btn btn-secondary">Reject</button>
                </div>
            </div>
        </div>
    )
}