import { useEffect } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutContext'

// components
import WorkoutDetails from "../components/workoutDetails"
import WorkoutForm from "../components/workoutsForm"

const HomePage = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: json })
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default HomePage