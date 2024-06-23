import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/static/Dashboard';
import Home from './components/static/Home';
import NoPageFound from './components/static/NoPageFound';
import Contact from './components/static/Contact';
import Login from './components/user/Login';
import College from './components/nested/College';
import Teacher from './components/nested/Teacher';
import Student from './components/nested/Student';
import HookNav from './components/hook/HookNav';
import UseEffectDemo from './components/hook/UseEffectDemo';
import UseMemoDemo from './components/hook/UseMemoDemo';
import UseContextDemo from './components/hook/UseContextDemo';
import ComponentType from './components/ClassExamples/ComponentType';
import ClassDemo from './components/ClassExamples/ClassDemo';
import FunctionDemo from './components/ClassExamples/FunctionDemo';
import ConditionalDemo from './components/static/ConditionalDemo';
import LifecycleDemo from './components/static/LifeCycleDemo';
import AxiosDemo from './components/static/AxiosDemo';
import NestedAxio from './components/nested/NestedAxio';
import Counter from './components/static/Counter';
import Spa from './components/Spa/SPA';



const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />}>
				<Route path="home" element={<Home />} />
				<Route path="contact" element={<Contact />} />
				<Route path="college" element={<College />}>
					<Route path="teacher" element={<Teacher />} />
					<Route path="student" element={<Student />} />
				</Route>
				<Route path='hook' element={<HookNav />}>
					<Route path="use-effect" element={<UseEffectDemo />} />
					<Route path="use-memo" element={<UseMemoDemo />} />
					<Route path="use-context" element={<UseContextDemo />} />
				</Route>
				<Route path="component-types" element={<ComponentType />}>
					<Route path='class-demo' element={<ClassDemo />} />
					<Route path='function-demo' element={<FunctionDemo />} />
				</Route>
				<Route path="conditional-demo" element={<ConditionalDemo />} />
				<Route path="lifecycle" element={<LifecycleDemo />} />
				<Route path='axios' element={<AxiosDemo />} />
				<Route path='nested-axio' element={<NestedAxio />} />
				<Route path="counter" element={<Counter />} />
				<Route path="spa" element={<Spa />} />
				<Route path="*" element={<NoPageFound />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
