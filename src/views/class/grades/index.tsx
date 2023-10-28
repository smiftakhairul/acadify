import { useEffect, useState } from "react";
import useStorage from "../../../hooks/useStorage";
import { prepareFormFields } from "../../../utils/helpers/common";
import Footer from "../../_common/partials/footer";
import Header from "../../_common/partials/header";
import Sidebar from "../../_common/partials/sidebar";
import BreadCrumbWrapper from "../../_common/wrappers/breadcrumb-wrapper";
import ModalWrapper from "../../_common/wrappers/modal-wrapper";
import ClassInfo from "../_partials/info";
import ClassLinks from "../_partials/links";
import LineChart from "../../_common/components/line-chart";

const Grades = () => {
  const storage = useStorage();
  const [user, setUser]: any = useState({});
  const [students, setStudents]: any = useState([
    {name: 'S M Iftakhairul'},
    {name: 'John Doe'},
    {name: 'Peter Smith'},
    {name: 'Risul Islam'},
    {name: 'Raiyad Raad'},
  ]);

  useEffect(() => {
    setUser(JSON.parse(storage.getItem('user') || ''))
  }, [])

  const uploadMaterial = () => {
    const formData = prepareFormFields('uploadMaterialForm');
    console.log(formData);
  }

  const modifyPercentage = () => {
    const formData = prepareFormFields('modifyPercentageForm');
    console.log(formData);
  }

  const distributeAttendance = () => {
    const formData = prepareFormFields('distributeAttendanceForm');
    console.log(formData);
  }

  const distributeAssignments = () => {
    const formData = prepareFormFields('distributeAssignmentsForm');
    console.log(formData);
  }

  const distributeQuizzes = () => {
    const formData = prepareFormFields('distributeQuizzesForm');
    console.log(formData);
  }

  const distributeMidterms = () => {
    const formData = prepareFormFields('distributeMidtermsForm');
    console.log(formData);
  }

  const distributeFinal = () => {
    const formData = prepareFormFields('distributeFinalForm');
    console.log(formData);
  }

  const facultyContent = () => {
    return <>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Attendance</h5>
                <h2 className="mb-0">5%</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-secondary-light mt-1">
                <i className="fas fa-allergies fa-fw fa-sm text-secondary"></i>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#distributeAttendance">Distribute</button>
              <button className="btn btn-info btn-xs ml-1" disabled>View</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Assignments</h5>
                <h2 className="mb-0">10%</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-primary-light mt-1">
                <i className="fas fa-book fa-fw fa-sm text-primary"></i>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#distributeAssignments">Distribute</button>
              <button className="btn btn-info btn-xs ml-1" data-toggle="modal" data-target="#viewAssignments">View</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Quizzes</h5>
                <h2 className="mb-0">10%</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-info-light mt-1">
                <i className="fas fa-question fa-fw fa-sm text-info"></i>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#distributeQuizzes">Distribute</button>
              <button className="btn btn-info btn-xs ml-1" data-toggle="modal" data-target="#viewQuizzes">View</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Midterms</h5>
                <h2 className="mb-0">25%</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-brand-light mt-1">
                <i className="fas fa-warehouse fa-fw fa-sm text-brand"></i>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#distributeMidterms">Distribute</button>
              <button className="btn btn-info btn-xs ml-1" data-toggle="modal" data-target="#viewMidterms">View</button>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Final</h5>
                <h2 className="mb-0">50%</h2>
              </div>
              <div className="float-right icon-circle-medium icon-box-lg bg-success-light mt-1">
                <i className="fas fa-university fa-fw fa-sm text-success"></i>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#distributeFinal">Distribute</button>
              <button className="btn btn-info btn-xs ml-1" data-toggle="modal" data-target="#viewFinal">View</button>
            </div>
          </div>
        </div>

        <ModalWrapper
          id="distributeAttendance"
          largeModal={true}
          headerTitle="Attendance Marks"
          isForm={true}
          onFormSubmit={() => distributeAttendance()}
        >
          <div className="row mb-3">
            <div className="col-md-8">
              <div className="form-inline">
                <label className="mr-2" htmlFor="attendanceDist">Attendance (%): </label>
                <input type="number" name="attendance_total" className="form-control" id="attendanceDist" required />
              </div>
            </div>
            <div className="col-md-4 text-right">
              <button className="btn btn-primary btn-sm"><i className="fas fa-file"></i> Import from CSV</button>
            </div>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{width: '10%'}}>#</th>
                <th scope="col" style={{width: '60%'}}>Student</th>
                <th scope="col" style={{width: '30%'}}>Obtained %</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student: any, index: number) => {
                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student?.name}</td>
                    <td><input type="number" name="attendance[]" className="form-control" required /></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </ModalWrapper>

        <ModalWrapper
          id="distributeAssignments"
          largeModal={true}
          headerTitle="Assignments Marks"
          isForm={true}
          onFormSubmit={() => distributeAssignments()}
        >
          <div className="row mb-3">
            <div className="col-md-8">
              <div className="form-inline">
                <label className="mr-2" htmlFor="assignmentDist">Total Assignment Marks: </label>
                <input type="number" name="assignment_total" className="form-control" id="assignmentDist" required />
              </div>
            </div>
            <div className="col-md-4 text-right">
              <button className="btn btn-primary btn-sm"><i className="fas fa-file"></i> Import from CSV</button>
            </div>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{width: '10%'}}>#</th>
                <th scope="col" style={{width: '60%'}}>Student</th>
                <th scope="col" style={{width: '30%'}}>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student: any, index: number) => {
                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student?.name}</td>
                    <td><input type="number" name="assignment[]" className="form-control" required /></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </ModalWrapper>

        <ModalWrapper
          id="distributeQuizzes"
          largeModal={true}
          headerTitle="Quizzes Marks"
          isForm={true}
          onFormSubmit={() => distributeQuizzes()}
        >
          <div className="row mb-3">
            <div className="col-md-8">
              <div className="form-inline">
                <label className="mr-2" htmlFor="quizDist">Total Quiz Marks: </label>
                <input type="number" name="quiz_total" className="form-control" id="quizDist" required />
              </div>
            </div>
            <div className="col-md-4 text-right">
              <button className="btn btn-primary btn-sm"><i className="fas fa-file"></i> Import from CSV</button>
            </div>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{width: '10%'}}>#</th>
                <th scope="col" style={{width: '60%'}}>Student</th>
                <th scope="col" style={{width: '30%'}}>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student: any, index: number) => {
                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student?.name}</td>
                    <td><input type="number" name="quiz[]" className="form-control" required /></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </ModalWrapper>

        <ModalWrapper
          id="distributeMidterms"
          largeModal={true}
          headerTitle="Midterms Marks"
          isForm={true}
          onFormSubmit={() => distributeMidterms()}
        >
          <div className="row mb-3">
            <div className="col-md-8">
              <div className="form-inline">
                <label className="mr-2" htmlFor="midtermDist">Total Midterm Marks: </label>
                <input type="number" name="midterm_total" className="form-control" id="midtermDist" required />
              </div>
            </div>
            <div className="col-md-4 text-right">
              <button className="btn btn-primary btn-sm"><i className="fas fa-file"></i> Import from CSV</button>
            </div>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{width: '10%'}}>#</th>
                <th scope="col" style={{width: '60%'}}>Student</th>
                <th scope="col" style={{width: '30%'}}>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student: any, index: number) => {
                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student?.name}</td>
                    <td><input type="number" name="midterm[]" className="form-control" required /></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </ModalWrapper>

        <ModalWrapper
          id="distributeFinal"
          largeModal={true}
          headerTitle="Final Marks"
          isForm={true}
          onFormSubmit={() => distributeFinal()}
        >
          <div className="row mb-3">
            <div className="col-md-8">
              <div className="form-inline">
                <label className="mr-2" htmlFor="finalDist">Total Final Marks: </label>
                <input type="number" name="final_total" className="form-control" id="finalDist" required />
              </div>
            </div>
            <div className="col-md-4 text-right">
              <button className="btn btn-primary btn-sm"><i className="fas fa-file"></i> Import from CSV</button>
            </div>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{width: '10%'}}>#</th>
                <th scope="col" style={{width: '60%'}}>Student</th>
                <th scope="col" style={{width: '30%'}}>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student: any, index: number) => {
                  return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student?.name}</td>
                    <td><input type="number" name="final[]" className="form-control" required /></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </ModalWrapper>

        <ModalWrapper
          id="viewAssignments"
          largeModal={true}
          headerTitle="View Assignments"
          footerSubmitBtnDisabled={true}
        >
          <div className="text-right mb-3">
            <button className="btn btn-primary btn-sm">Export to CSV</button>
          </div>
          <div className="card card-body">
            <LineChart
              title="Assignment Marks Statistics"
              labels={[
                'S M Iftakhairul', 'John Doe', 'Peter Smith', 'Risul Islam', 'Raiyad Raad'
              ]}
              data={[
                {
                  label: 'Assignment 1',
                  data: [45, 45, 45, 45, 45],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ]}
              />
          </div>
          <div className="card">
            <div className="card-header">Assignment 1</div>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student</th>
                    <th scope="col">Total Marks</th>
                    <th scope="col">Obtained Marks</th>
                    <th scope="col">10% of Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((student: any, index: number) => {
                      return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{student?.name}</td>
                        <td>50</td>
                        <td>45</td>
                        <td>9.00</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </ModalWrapper>

        <ModalWrapper
          id="viewQuizzes"
          largeModal={true}
          headerTitle="View Quizzes"
          footerSubmitBtnDisabled={true}
        >
          <div className="text-right mb-3">
            <button className="btn btn-primary btn-sm">Export to CSV</button>
          </div>
          <div className="card card-body">
            <LineChart
              title="Quiz Marks Statistics"
              labels={[
                'S M Iftakhairul', 'John Doe', 'Peter Smith', 'Risul Islam', 'Raiyad Raad'
              ]}
              data={[
                {
                  label: 'Quiz 1',
                  data: [45, 45, 45, 45, 45],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ]}
              />
          </div>
          <div className="card">
            <div className="card-header">Quiz 1</div>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student</th>
                    <th scope="col">Total Marks</th>
                    <th scope="col">Obtained Marks</th>
                    <th scope="col">10% of Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((student: any, index: number) => {
                      return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{student?.name}</td>
                        <td>50</td>
                        <td>45</td>
                        <td>9.00</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </ModalWrapper>

        <ModalWrapper
          id="viewMidterms"
          largeModal={true}
          headerTitle="View Midterms"
          footerSubmitBtnDisabled={true}
        >
          <div className="text-right mb-3">
            <button className="btn btn-primary btn-sm">Export to CSV</button>
          </div>
          <div className="card card-body">
            <LineChart
              title="Midterm Marks Statistics"
              labels={[
                'S M Iftakhairul', 'John Doe', 'Peter Smith', 'Risul Islam', 'Raiyad Raad'
              ]}
              data={[
                {
                  label: 'Midterm 1',
                  data: [45, 45, 45, 45, 45],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ]}
              />
          </div>
          <div className="card">
            <div className="card-header">Midterm 1</div>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student</th>
                    <th scope="col">Total Marks</th>
                    <th scope="col">Obtained Marks</th>
                    <th scope="col">10% of Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((student: any, index: number) => {
                      return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{student?.name}</td>
                        <td>50</td>
                        <td>40</td>
                        <td>20.00</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </ModalWrapper>

        <ModalWrapper
          id="viewFinal"
          largeModal={true}
          headerTitle="View Final"
          footerSubmitBtnDisabled={true}
        >
          <div className="text-right mb-3">
            <button className="btn btn-primary btn-sm">Export to CSV</button>
          </div>
          <div className="card card-body">
            <LineChart
              title="Final Marks Statistics"
              labels={[
                'S M Iftakhairul', 'John Doe', 'Peter Smith', 'Risul Islam', 'Raiyad Raad'
              ]}
              data={[
                {
                  label: 'Final',
                  data: [45, 45, 45, 45, 45],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ]}
              />
          </div>
          <div className="card">
            <div className="card-header">Final</div>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student</th>
                    <th scope="col">Total Marks</th>
                    <th scope="col">Obtained Marks</th>
                    <th scope="col">10% of Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((student: any, index: number) => {
                      return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{student?.name}</td>
                        <td>100</td>
                        <td>88</td>
                        <td>44.00</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </ModalWrapper>
      </div>
    </>
  }

  const studentContent = () => {
    return <>
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item bg-dark text-white">Marks Distribution</li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Attendance</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">5%</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Assignments</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">10%</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Quizzes</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">10%</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Midterms</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">25%</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Final</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">50%</span></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item bg-dark text-white">My Performance</li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Attendance</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">5.00</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Assignments</div>
                <div className="col-md-4 text-right"><span className="badge badge-danger">Not available</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Quizzes</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">9.00</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Midterms</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">20.00</span></div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-8">Final</div>
                <div className="col-md-4 text-right"><span className="badge badge-dark">44.00</span></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="card card-body mt-3 mb-3">
        <div className="row">
          <div className="col-md-12">
            <LineChart
              title="My Statistics"
              labels={[
                'Attendance', 'Assignments', 'Quizzes', 'Midterms', 'Final'
              ]}
              data={[
                {
                  label: 'Marks',
                  data: [5, 0, 9, 20, 44],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">Attendance Marks</div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exam</th>
                <th scope="col">Total Marks (%)</th>
                <th scope="col">Total (5%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Attendance</td>
                <td>5</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">Assignments Marks</div>
        <div className="card-body">
          <div className="alert alert-danger">Assignment marks is not provided yet.</div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">Quizzes Marks</div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exam</th>
                <th scope="col">Total Marks</th>
                <th scope="col">Obtained Marks</th>
                <th scope="col">Total (10%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Quiz 1</td>
                <td>50</td>
                <td>45</td>
                <td>9.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">Midterms Marks</div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exam</th>
                <th scope="col">Total Marks</th>
                <th scope="col">Obtained Marks</th>
                <th scope="col">Total (10%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Midterm 1</td>
                <td>50</td>
                <td>40</td>
                <td>20.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">Final Marks</div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exam</th>
                <th scope="col">Total Marks</th>
                <th scope="col">Obtained Marks</th>
                <th scope="col">Total (10%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Final</td>
                <td>100</td>
                <td>88</td>
                <td>44.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  }

  return (
    <div className="dashboard-main-wrapper">
      <Header />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <BreadCrumbWrapper
            title="JavaScript Foundation Course"
            items={[
              {title: 'Home', link: '/home'},
              {title: 'Classes', link: '/classes'},
              {title: 'JavaScript Foundation Course', active: true}
            ]}
          >
            <ClassLinks />
            {user?.role === 'faculty' && <button type="button" className="btn btn-warning btn-xs ml-1" data-toggle="modal" data-target="#modifyPercentage">Modify %</button>}
            {user?.role === 'faculty' && <button type="button" className="btn btn-primary btn-xs ml-1" data-toggle="modal" data-target="#uploadMaterial">Upload Material</button>}
          </BreadCrumbWrapper>

          <div className="row">
            <div className="col-md-8">
              {user?.role === 'faculty' ? facultyContent() : studentContent()}
            </div>
            <div className="col-md-4">
              <ClassInfo />
            </div>
          </div>
          
          <ModalWrapper
            id="uploadMaterial"
            largeModal={true}
            headerTitle="Upload Material"
            isForm={true}
            onFormSubmit={() => uploadMaterial()}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="attachments">Attachments</label>
                  <input type="file" name="attachments[]" className="form-control" id="attachments" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" className="form-control" id="description" cols={30} rows={5} placeholder="Description" required></textarea>
                </div>
              </div>
            </div>       
          </ModalWrapper>

          <ModalWrapper
            id="modifyPercentage"
            headerTitle="Modify (%) of Class Structure"
            isForm={true}
            onFormSubmit={() => modifyPercentage()}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="attendance">Attendance (%)</label>
                  <input type="number" name="attendance" className="form-control" id="attendance" placeholder="% of Attendance" defaultValue={5} min={1} required />
                </div>
                <div className="form-group">
                  <label htmlFor="assignment">Assignments (%)</label>
                  <input type="number" name="assignment" className="form-control" id="assignment" placeholder="% of Assignments" defaultValue={10} min={1} required />
                </div>
                <div className="form-group">
                  <label htmlFor="quiz">Quizzes (%)</label>
                  <input type="number" name="quiz" className="form-control" id="quiz" placeholder="% of Quizzes" defaultValue={10} min={1} required />
                </div>
                <div className="form-group">
                  <label htmlFor="midterm">Midterms (%)</label>
                  <input type="number" name="midterm" className="form-control" id="midterm" placeholder="% of Midterms" defaultValue={25} min={1} required />
                </div>
                <div className="form-group">
                  <label htmlFor="final">Final (%)</label>
                  <input type="number" name="final" className="form-control" id="final" placeholder="% of Final" defaultValue={50} min={1} required />
                </div>
              </div>
            </div>       
          </ModalWrapper>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Grades;
