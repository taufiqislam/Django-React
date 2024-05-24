import './App.css';
import '../src/assets/Custom.css'
import { MissionPage } from './pages/MissionPage';
import { VisionPage } from './pages/VisionPage';
import { PeoPage } from './pages/PeoPage';
import { PloPage } from './pages/PloPage';
import { IloPage } from './pages/IloPage';
import { CourseInfoPage } from './pages/CourseInfoPage';
import { PeoMapMissionPage } from './pages/PeoMapMissionPage';
import { PloMapPeoPage } from './pages/PloMapPeoPage';
import { CloMapPloPage } from './pages/CloMapPloPage';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CoursePage } from './pages/CoursePage'
import CurriculumPage from './pages/CurriculumPage';
import CloPloRePage from "./pages/CloPloRePage";
import { CloPage } from './pages/CloPage';
import { BookReferencePage } from './pages/BookReferencePage';
import { CourseObjectivePage } from './pages/CourseObjectivePage';
import { CourseAssessmentPage } from './pages/CourseAssessmentPage';
import SyllabusPage from "./pages/SyllabusPage";
import { Col, Container, Row } from "react-bootstrap";
import { OutlineTablePage } from "./pages/OutlineTablePage";
import MissionWrapper from './components/MissionWrapper';
import DataContext from './components/Context/DataContext';
import { Sidebar } from './components/Sidebar1';

function App() {

    const [upCurriculums, setUpCurriculums] = useState({});
    const [upSyllabuses, setUpSyllabuses] = useState({});
    const [upCourses, setUpCourses] = useState({});

    return (
        <BrowserRouter>
            <DataContext.Provider value={{
                upCurriculums, setUpCurriculums,
                upSyllabuses, setUpSyllabuses,
                upCourses, setUpCourses,
            }}>
                <Main />
            </DataContext.Provider>
        </BrowserRouter>
    );
}

function Main() {
    return (
        <Container>
            <Row>
                <Col md={2} sm={2} lg={2}>
                    <div className="navbar">
                        <div className="scrollable-content">
                            <Sidebar/> {/* Pass currentPath as a prop */}
                        </div>
                    </div>
                </Col>
                <Col md={10} sm={10} lg={10}>
                    <Row className="fixMargin">
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/mission' element={<MissionWrapper />} />
                            <Route path='/vision' element={<VisionPage />} />
                            <Route path='/curriculum' element={<CurriculumPage />} />
                            <Route path='/syllabus/:curriculumId' element={<SyllabusPage />} />
                            <Route path='peo/:curriculumId/:syllabusId' element={<PeoPage />} />
                            <Route path='plo/:curriculumId/:syllabusId' element={<PloPage />} />
                            <Route path='peomapmission/:curriculumId/:syllabusId' element={<PeoMapMissionPage />} />
                            <Route path='plomappeo/:curriculumId/:syllabusId' element={<PloMapPeoPage />} />
                            <Route path='course/:curriculumId/:syllabusId' element={<CoursePage />} />
                            <Route path='clomapplo/:curriculumId/:syllabusId/:courseId' element={<CloMapPloPage />} />
                            <Route path='cloPloReasoning/:curriculumId/:syllabusId/:courseId' element={<CloPloRePage />} />
                            <Route path='clo/:curriculumId/:syllabusId/:courseId' element={<CloPage />} />
                            <Route path='bookreference/:curriculumId/:syllabusId/:courseId' element={<BookReferencePage />} />
                            <Route path='courseobjective/:curriculumId/:syllabusId/:courseId' element={<CourseObjectivePage />} />
                            <Route path='courseassessment/:curriculumId/:syllabusId/:courseId' element={<CourseAssessmentPage />} />
                            <Route path='ilo/:curriculumId/:syllabusId/:courseId' element={<IloPage />} />
                            <Route path='courseinfo/:curriculumId/:syllabusId/:courseId' element={<CourseInfoPage />} />
                            <Route path='outline/:curriculumId/:syllabusId/:courseId' element={<OutlineTablePage />} />
                        </Routes>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
