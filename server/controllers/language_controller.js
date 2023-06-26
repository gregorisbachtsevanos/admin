import Language from '../models/language_model.js';
import serverErrorHandler from '../utils/serverErrorHandler.js';

export const getSupportedLanguages = async (req, res, next) => {
    const langs = await Language.find()

    if (!langs) return next(new serverErrorHandler('Languages has not found', 404))

    const languagesCode = langs.map(el => el.language)
    res.status(200).json({ languagesCode, langs })
}

export const addNewLanguage = async (req, res) => {
    const newLang = new Language(req.body);
    await newLang.save();
    res.status(201).json('New language has been added')
}

export const deleteLanguage = async (req, res, next) => {
    const lang = await Language.findByIdAndDelete(req.query.id)

    if (!lang) return next(new serverErrorHandler('Language can not found', 404))

    if (!lang) return res.status(500).json('Language has not found')

    res.status(200).json(lang)
}