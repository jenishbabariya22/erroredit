import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { edituser, removeuser, viewuser } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';

function Add() {

  const record = useSelector(state => state.crud.user)
  const Dispatch = useDispatch()
  console.log(record);

  useEffect(() => {
    Dispatch(viewuser())
  }, [])

  const remove = (id) => {
    Dispatch(removeuser(id))
  }



  return (
    <div className='container' style={{ margin: "0 auto" }}>
      <center>
        <button className="button" style={{ marginTop: "10px", marginBottom: "20px" }}>
          <svg viewBox="0 0 16 16" className="bi bi-lightning-charge-fill" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" /></svg><Link to={"/"}>View</Link>
        </button>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Password
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                record && record.map((val) =>
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {val.id}
                    </th>
                    <td class="px-6 py-4">
                      {val.email}
                    </td>
                    <td class="px-6 py-4">
                      {val.password}
                    </td>
                    <td class="px-6 py-4" style={{ display: 'flex' }}>
                      <button id='btn' style={{ marginRight: "15px" }} onClick={() => remove(val.id)}>
                        <p>Delete</p>
                      </button>
                      <Link to={`/edit/${val.id}`}> <button id='btn'>
                        <p>Edit</p>
                      </button></Link>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </center>
    </div>
  )
}

export default Add
